import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#about',       label: 'About' },
  { href: '#papers',      label: 'Research Papers' },
  { href: '#awards',      label: 'Awards & Honours' },
  { href: '#memberships', label: 'Memberships' },
  { href: '#pain-app',    label: 'Pain App' },
  { href: '#partner',     label: 'Partner Hospital' },
  { href: '#centre',      label: 'Pain Centre' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="logo"><b>Dr. Prasanna Vani</b></a>
        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="nav-item">{item.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href="#contact" className="cta-nav">Book Consultation</a>
        </div>
      </div>
    </nav>
  )
}
