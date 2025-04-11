'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Blood splatter background */}
      <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-5 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#BB0000]">About Exodia</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              IIT Mandi's annual cultural fest, bringing together creative minds for an unforgettable experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#BB0000]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/events', label: 'Events' },
                { href: '/schedule', label: 'Schedule' },
                { href: '/sponsors', label: 'Sponsors' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#BB0000] transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#BB0000]">Contact Us</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-400">
                cultural_secretary@students.iitmandi.ac.in
              </li>
              <li className="text-gray-400">
                +91 77393 01036
              </li>
              <li className="text-gray-400">
                IIT Mandi, Himachal Pradesh
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#BB0000]">Follow Us</h3>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { href: 'https://www.facebook.com/Exodia.IITMandi', icon: '/socialmedia/facebook.png' },
                { href: 'https://www.instagram.com/exodia.iitmandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: '/socialmedia/insta.png' },
                { href: 'https://www.linkedin.com/company/exodia-iitmandi/', icon: '/socialmedia/linkedin.png' },
                { href: 'https://x.com/exodia_iitmandi', icon: '/socialmedia/twitter.png' }
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#BB0000]/20 rounded-full flex items-center justify-center hover:bg-[#BB0000]/40 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt="Social Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    priority
                  />
                  <span className="sr-only">Social Icon</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#BB0000]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Exodia. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#BB0000] transition-colors text-sm sm:text-base"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#BB0000] transition-colors text-sm sm:text-base"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 