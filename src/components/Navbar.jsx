import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="logo"><b>Dr. Prasanna Vani</b></a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <a href="#about"       onClick={closeMenu}>About</a>
          <a href="#papers"      onClick={closeMenu}>Papers</a>
          <a href="#awards"      onClick={closeMenu}>Awards</a>
          <a href="#memberships" onClick={closeMenu}>Memberships</a>
          <a href="#pain-app"    onClick={closeMenu}>Pain App</a>
          <a href="#partner"     onClick={closeMenu}>Partner</a>
          <a href="#centre"      onClick={closeMenu}>Centre</a>
          <a href="#contact"     onClick={closeMenu} className="cta-nav mobile-cta">Book Consultation</a>
        </div>

        <div className="nav-right">
          <a href="#contact" className="cta-nav desktop-cta">Book Consultation</a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
