'use client';

import Link from 'next/link'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/events', label: 'Events' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/teams', label: 'Teams' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-[#BB0000]/20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-white hover:text-[#BB0000] transition-colors">
            EXODIA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-[#BB0000] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/join"
              className="px-4 py-2 bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
            >
              Join Exodia
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block mb-1.5 transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block mb-1.5 transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-[#BB0000] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2 bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
                >
                  Join Exodia
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 