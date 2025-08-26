"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, BookOpen, Briefcase, MessagesSquare } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Leafyze - Image Classification App",
      description: "Built a CNN with TensorFlow and Keras to classify tomato leaves as healthy, early blight, or late blight. Deployed an interactive Streamlit app with real-time image uploads and preprocessing using PIL for improved accuracy.",
      technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "PIL"],
      liveLink: "https://leafyze.streamlit.app/",
      githubLink: "https://github.com/safibaig03/Leafyze",
      year: "2024"
    },
    {
      title: "BookIt - Bookstore Application",
      description: "Developed a full-stack MERN bookstore with user authentication, profile management, and book operations using JWT-based auth and RESTful APIs. Built a responsive UI with React and optimized performance.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RESTful API"],
      liveLink: null,
      githubLink: "https://github.com/safibaig03/bookit",
      year: "2024"
    },
    {
      title: "JobJet - Job Board Platform",
      description: "Built a full-stack job board platform with multi-role authentication, company profiles, job postings, and application workflows. Implemented secure auth with Passport.js, resume uploads, and responsive dashboards using Express.js, Drizzle ORM, and PostgreSQL.",
      technologies: ["React", "Tailwind CSS", "Shadcn UI", "React Query", "Express.js", "Drizzle ORM", "PostgreSQL", "Passport.js"],
      liveLink: "https://jobjet-beryl.vercel.app/",
      githubLink: "https://github.com/safibaig03/Jobjet",
      year: "2025"
    },
    {
      title: "CommentAizer - YouTube Comment Summarizer",
      description: "Developed a web application to generate concise summaries of YouTube video comments using Google's Gemini API. Integrated both the YouTube Data API v3 and the Gemini API, orchestrating the workflow with LangChain to manage API calls efficiently.",
      technologies: ["Streamlit", "LangChain", "Google Gemini API", "Python", "YouTube Data API v3"],
      liveLink: "https://safibaig03-commentaizer-app-ho2knc.streamlit.app/",
      githubLink: "https://github.com/safibaig03/commentaizer",
      year: "2025"
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-black pt-24">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing skills in AI/ML, full-stack development, and modern web technologies.
            Each project demonstrates my passion for building intelligent applications that solve real-world problems.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-gray-900/50"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6">
                      {project.title.includes('Leafyze') && <Brain className="w-6 h-6 text-gray-300" />}
                      {project.title.includes('BookIt') && <BookOpen className="w-6 h-6 text-gray-300" />}
                      {project.title.includes('JobJet') && <Briefcase className="w-6 h-6 text-gray-300" />}
                      {project.title.includes('CommentAizer') && <MessagesSquare className="w-6 h-6 text-gray-300" />}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm border border-gray-700 hover:border-gray-600"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm border border-gray-700 hover:border-gray-600"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}