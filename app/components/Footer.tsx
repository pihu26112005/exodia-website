import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-[#BB0000]/50 texture-overlay">
      <div className="container mx-auto px-8">
        <div className="flex justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4 blood-drip">EXODIA '25</h2>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#BB0000]">Participate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Events Portal
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Join The Community
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Brochure
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#BB0000]">Explore More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  About Exodia
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Previous Star Attractions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Gallery
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#BB0000]">Reach Out To Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Core Team
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-[#BB0000] transition-all duration-300 group relative">
                  Developers
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaWhatsapp />
          </Link>
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaLinkedin />
          </Link>
          <Link href="#" className="text-2xl hover:text-[#BB0000] transition-all duration-300">
            <FaFacebook />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>© Exodia '25, IIT Mandi | Made with <span className="text-[#BB0000]">❤️</span> by Web Dev Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 