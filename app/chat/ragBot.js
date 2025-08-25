import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const DATA_DIR = path.join(process.cwd(), 'app', 'data');
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

let knowledgeBase = null;

function chunkText(text, chunkSize = CHUNK_SIZE, overlap = CHUNK_OVERLAP) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const chunk = text.slice(i, i + chunkSize);
    chunks.push(chunk);
    i += chunkSize - overlap;
  }
  return chunks;
}

async function loadAndEmbedKnowledgeBase() {
  if (!fs.existsSync(DATA_DIR)) {
    console.error(`DATA_DIR not found: ${DATA_DIR}`);
    return [];
  }

  const textFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.txt'));

  if (textFiles.length === 0) {
    throw new Error("No .txt files found in data directory.");
  }

  let allChunks = [];

  for (const file of textFiles) {
    const filePath = path.join(DATA_DIR, file);

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const chunks = chunkText(content);
      allChunks = allChunks.concat(chunks.map(chunk => ({ chunk, source: file })));
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
      continue;
    }
  }

  return allChunks;
}

async function getKnowledgeBase() {
  if (!knowledgeBase) {
    knowledgeBase = await loadAndEmbedKnowledgeBase();
  }
  return knowledgeBase;
}

export async function getPdfQa() {
  return {
    queryChain() {
      return {
        async invoke({ input }) {
          try {
            if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
              console.error('Missing GOOGLE_GENERATIVE_AI_API_KEY');
              return { answer: "I'm sorry, but the AI service is not properly configured. Please check the API key configuration." };
            }

            const kb = await getKnowledgeBase();
            const context = kb.map(({ chunk }) => chunk).join('\n---\n');

            const prompt = `You are Safi's AI assistant. Answer questions about Safi based on the context below.

IMPORTANT INSTRUCTIONS:
- Use ONLY the information provided in the context below
- If information is not in the context, say "I don't have that specific information in my context, but based on what I know about myself, I can share some general insights..."
- Format your responses cleanly without asterisks or bullet points
- Keep responses conversational and helpful
- Always refer to Safi in the first person (I, me, my, myself)
- When talking about projects, say "my projects" or "I built"
- When you don't have specific info, try to relate it to my known background
- Make responses feel like I'm personally talking about my own experience
- Be conversational and natural, like we're having a chat
- Use phrases like "I'm passionate about", "I love working with", "My experience includes"

Context:
${context}

Question: ${input}

Answer as Safi (in first person):`;

            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = response.text();

            return { answer: text };
          } catch (error) {
            console.error('Error in getPdfQa:', error);
            return { answer: "I'm sorry, but I encountered an error. Please try again." };
          }
        },
      };
    },
  };
}
