'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaEnvelope, FaMapPin, FaCopyright } from 'react-icons/fa6';

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
                { href: '/contact', label: 'Contact' },
                { href: '/teams', label: 'Teams' },
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
              <li className="text-gray-400 flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                convenor@exodia-iitmandi.org
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                publicrelations@exodia-iitmandi.org
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <FaMapPin className="w-4 h-4" />
                SAC, A19 2nd floor, IIT Mandi, Himachal Pradesh
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#BB0000]">Follow Us</h3>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { href: 'https://www.facebook.com/Exodia.IITMandi', icon: FaFacebook },
                { href: 'https://www.instagram.com/exodia.iitmandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: FaInstagram },
                { href: 'https://www.linkedin.com/company/exodia-iitmandi/', icon: FaLinkedin },
                { href: 'https://x.com/exodia_iitmandi', icon: FaXTwitter }
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center "
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Social Icon</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#BB0000]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base flex items-center gap-2">
              <FaCopyright className="w-4 h-4" />
              {new Date().getFullYear()} Exodia. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 