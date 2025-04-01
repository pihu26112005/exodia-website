import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#050505] text-white border-b border-[#BB0000]/50 shadow-lg shadow-[#BB0000]/10 texture-overlay">
      <Link href="/" className="text-3xl font-bold text-white relative group">
        <span className="blood-drip">Exodia</span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      
      <nav className="flex items-center gap-8">
        <Link href="/" className="hover:text-[#BB0000] transition duration-300 relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/events" className="hover:text-[#BB0000] transition duration-300 relative group">
          Events
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/gallery" className="hover:text-[#BB0000] transition duration-300 relative group">
          Gallery
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/team" className="hover:text-[#BB0000] transition duration-300 relative group">
          Team
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="hover:text-[#BB0000] transition duration-300 relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB0000] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>

      <Link 
        href="/join"
        className="bg-[#BB0000] px-6 py-2 rounded-none border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-md shadow-[#BB0000]/20"
      >
        Join Exodia
      </Link>
    </header>
  )
}

export default Header 