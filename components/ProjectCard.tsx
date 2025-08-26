'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Database, Brain,MessagesSquare } from 'lucide-react'
import React from 'react'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  github?: string
  tech: string[]
}

const ProjectCard = ({ title, description, link, github, tech }: ProjectCardProps) => {
  const getProjectIcon = (projectTitle: string) => {
    if (projectTitle.includes('Leafyze')) return <Brain className="w-6 h-6 text-gray-400" />
    if (projectTitle.includes('BookIt')) return <Database className="w-6 h-6 text-gray-400" />
    if (projectTitle.includes('JobJet')) return <Globe className="w-6 h-6 text-gray-400" />
    if (projectTitle.includes('CommentAizer')) return <MessagesSquare className="w-6 h-6 text-gray-300" />
    return <Code className="w-8 h-8 text-gray-400" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      // 1. Make the card a flex column with full height
      className="flex h-full flex-col bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-gray-500 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-gray-900/50"
    >
      {/* Card content sections remain the same */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-600 group-hover:border-gray-500 transition-colors duration-300">
          {getProjectIcon(title)}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-800/70 text-gray-300 text-xs rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* --- REVISED ACTION BUTTONS SECTION --- */}
      {/* 2. Push this container to the bottom of the card */}
      <div className="mt-auto flex w-full gap-4 pt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white transition-colors duration-300 hover:border-gray-500 hover:bg-gray-700"
          >
            <Github size={16} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        )}
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white transition-colors duration-300 hover:border-gray-500 hover:bg-gray-600"
        >
          <ExternalLink size={16} />
          <span className="text-sm font-medium">Live Demo</span>
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard