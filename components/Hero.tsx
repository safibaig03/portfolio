'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    // The only change is here: from min-h-[50vh] to min-h-screen
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
        >
          Hi, I&apos;m <span className="text-white">Mirza Safiulla Baig</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-medium mx-auto text-gray-400 max-w-2xl leading-relaxed"
        >
          Aspiring Software Engineer with a passion for AI and Full Stack Development. 
          Computer Science student building real-world projects and exploring modern technologies.
        </motion.p>
      </motion.div>
    </section>
  )
}