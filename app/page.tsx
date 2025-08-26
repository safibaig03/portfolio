'use client'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Hero />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100"
          >
            MY PROJECTS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Leafyze - Image Classification App"
              description="Developed a CNN with TensorFlow to classify tomato leaves. Built an interactive Streamlit web app for real-time diagnosis. Implemented preprocessing with PIL to improve accuracy."
              link="https://leafyze.streamlit.app/"
              github="https://github.com/safibaig03/leafyze"
              tech={["Python", "TensorFlow", "Keras", "Streamlit", "PIL"]}
            />
            <ProjectCard
              title="BookIt - BookStore Web Application"
              description="Booking management system simplifying appointment scheduling and resource tracking. Full-stack solution with React, Node.js, and MongoDB."
              link="#"
              github="https://github.com/safibaig03/bookit"
              tech={["React", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              title="JobJet - Job Board Platform"
              description="Full-stack job board platform with multi-role authentication, company profiles, job postings, and application workflows. Built dashboards and secure backend with Express.js, Drizzle ORM, and PostgreSQL."
              link="https://jobjet-beryl.vercel.app/"
              github="https://github.com/safibaig03/jobjet"
              tech={["React", "Tailwind CSS", "Shadcn UI", "React Query", "Express.js", "Drizzle ORM", "PostgreSQL", "Passport.js"]}
            />
            <ProjectCard
              title="CommentAizer - YouTube Comment Summarizer"
              description="Generates concise summaries of YouTube video comments using the Google Gemini API. Integrated the YouTube Data API and used LangChain for AI orchestration and efficient API call management."
              link="https://safibaig03-commentaizer-app-ho2knc.streamlit.app/"
              github="https://github.com/safibaig03/commentaizer"
              tech={["Streamlit", "LangChain", "Google Gemini API", "Python", "YouTube Data API v3"]}
            />
          </div>


        </div>
      </section>
    </main>
  )
}