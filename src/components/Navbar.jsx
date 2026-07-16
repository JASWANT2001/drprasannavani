import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#about',       label: 'About' },
  { href: '#papers',      label: 'Research Papers' },
  { href: '#awards',      label: 'Awards & Honours' },
  { href: '#memberships', label: 'Memberships' },
  { href: '#pain-app',    label: 'Pain App' },
  { href: '#centre',      label: 'Pain Centre' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <b>Dr. Prasanna Vani V</b>
          <span className="logo-sub">Neuro Physician</span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="nav-item">{item.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href="#contact" className="cta-nav">Book Consultation</a>
        </div>
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mob-overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`mob-sidebar ${open ? 'open' : ''}`}>
        <div className="mob-side-head">
          <div className="logo">
            <b>Dr. Prasanna Vani V</b>
            <span className="logo-sub">Neuro Physician</span>
          </div>
        </div>
        <nav className="mob-side-links">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a href="#contact" className="cta-nav mob-side-cta" onClick={() => setOpen(false)}>
          Book Consultation
        </a>
      </aside>
    </nav>
  )
}
