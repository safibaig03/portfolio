'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, FileText, Rocket, Mail, Bot } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME", icon: <Home size={18} /> },
    { href: "/resume", label: "RESUME", icon: <FileText size={18} /> },
    { href: "/projects", label: "PROJECTS", icon: <Rocket size={18} /> },
    { href: "/contact", label: "CONTACT", icon: <Mail size={18} /> },
    { href: "/chat", label: "AI CHAT", icon: <Bot size={18} /> }
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-gray-300 font-semibold text-lg tracking-wide">
          Mirza Safiulla Baig
        </div>



        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-semibold text-sm tracking-wider group"
            >
              {item.icon}
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col items-center text-white hover:text-gray-300 transition-colors"
            >
              <span className="mb-2">{item.icon}</span>
              <span className="text-lg font-semibold tracking-wide">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
