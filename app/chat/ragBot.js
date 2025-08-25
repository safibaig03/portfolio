import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const DATA_DIR = path.join(process.cwd(), 'app', 'data');
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
  try {
    if (!fs.existsSync(DATA_DIR)) {
      console.error(`DATA_DIR not found: ${DATA_DIR}`);
      return [];
    }

    const textFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.txt'));

    if (textFiles.length === 0) {
      console.error("No .txt files found in data directory.");
      return [];
    }

    let allChunks = [];
    for (const file of textFiles) {
      const filePath = path.join(DATA_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const chunks = chunkText(content);
      allChunks.push(...chunks.map(chunk => ({ chunk, source: file })));
    }
    console.log(`Successfully loaded ${allChunks.length} chunks from ${textFiles.length} files.`);
    return allChunks;
  } catch (error) {
    console.error("Failed to load knowledge base:", error);
    return [];
  }
}

const knowledgeBasePromise = loadAndEmbedKnowledgeBase();

export async function getPdfQa() {
  const knowledgeBase = await knowledgeBasePromise;

  if (!knowledgeBase || knowledgeBase.length === 0) {
    console.error("Knowledge base is empty. AI will have no context.");
  }

  return {
    queryChain() {
      return {
        async invoke({ input }) {
          try {
            if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
              return { answer: "Configuration error: Missing AI API key." };
            }
            if (knowledgeBase.length === 0) {
              return { answer: "I'm sorry, my knowledge base is currently empty. I can't answer questions about Safi right now." };
            }

            const context = knowledgeBase.map(({ chunk }) => chunk).join('\n---\n');

            const prompt = `You are Safi's AI assistant. Answer questions about Safi based on the context below.

IMPORTANT INSTRUCTIONS:
- Use ONLY the information provided in the context below.
- If information is not in the context, say "I don't have that specific information in my context, but based on what I know about myself, I can share some general insights..."
- Keep responses conversational and helpful.
- Always refer to Safi in the first person (I, me, my).
- When talking about projects, say "my projects" or "I built".

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