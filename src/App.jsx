import { useEffect } from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import About       from './components/About'
import Papers      from './components/Papers'
import Awards      from './components/Awards'
import Memberships from './components/Memberships'
import PainApp     from './components/PainApp'
import Partner     from './components/Partner'
import Centre      from './components/Centre'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('in')
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = +el.dataset.count
          let cur = 0
          const steps = 40
          const inc = target / steps
          const t = setInterval(() => {
            cur += inc
            if (cur >= target) { cur = target; clearInterval(t) }
            el.textContent = Math.round(cur)
          }, 1400 / steps)
        })
        io.unobserve(entry.target)
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Papers />
      <Awards />
      <Memberships />
      <PainApp />
      <Partner />
      <Centre />
      <Contact />
      <Footer />
    </>
  )
}
