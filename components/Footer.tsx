import { Phone, Mail, GitBranch, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black w-full py-6 md:py-8 text-white flex justify-center items-center px-3 border-t border-gray-800'>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base max-w-full">
        <a href="tel:+918328091274" className="flex items-center gap-2 hover:text-gray-300 transition-colors group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
            <Phone size={16} className="text-gray-300" />
          </div>
          <span className="font-medium">+91-8328091274</span>
        </a>
        <a href="mailto:safiullabaig786@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition-colors group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
            <Mail size={16} className="text-gray-300" />
          </div>
          <span className="font-medium truncate max-w-32 sm:max-w-none">safiullabaig786@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/safibaig03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition-colors group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
            <Linkedin size={16} className="text-gray-300" />
          </div>
          <span className="font-medium">LinkedIn</span>
        </a>
        <a href="https://github.com/safibaig03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition-colors group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
            <GitBranch size={16} className="text-gray-300" />
          </div>
          <span className="font-medium">GitHub</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer