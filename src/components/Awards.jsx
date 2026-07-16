const AWARDS = [
  {
    ribbon: 'i.',
    title: 'Gold Medalist - M.D. Anaesthesia',
    desc: 'Examinations conducted by Tamilnadu Dr. M.G.R. Medical University.',
    year: '2014',
  },
  {
    ribbon: 'ii.',
    title: 'Best Research Paper Award',
    desc: 'Health Research Methodology workshop conducted by St. Johns Medical College.',
    year: '2017',
  },
  {
    ribbon: 'iii.',
    title: 'Invited Faculty - ISACON National',
    desc: 'Panellist in newer horizons in perioperative cancer care.',
    year: '2018',
  },
  {
    ribbon: 'iv.',
    title: 'Best Paper Presentation Award',
    desc: 'Krishnagiri Hosur CME.',
    year: '2024',
  },
  {
    ribbon: 'v.',
    title: 'Young Speaker Award',
    desc: 'National Conference of Society of Oncoanaesthesia and Perioperative Care.',
    year: '2024',
  },
  {
    ribbon: 'vi.',
    title: 'Invited Faculty - TN State ISA Meet',
    desc: 'Tamilnadu State ISA meet, Thanjavur.',
    year: '2024',
  },
  {
    ribbon: 'vii.',
    title: 'Expert Faculty - Tamilnadu State ISA',
    desc: 'Indian Society of Anaesthesiologists state conference.',
    year: '2025',
  },
  {
    ribbon: 'viii.',
    title: 'Expert Faculty - Pain Workshop',
    desc: 'Society of Oncoanaesthesia and Perioperative Care national conference, Chennai.',
    year: '2025',
  },
  {
    ribbon: 'ix.',
    title: 'Felicitated by Rotary Cancer Research Foundation',
    desc: 'For a project on prehabilitation in Ovarian Cancer patients.',
    year: '2025',
  },
  {
    ribbon: 'x.',
    title: 'Annacharya Lokapur Foundation Award',
    desc: 'Best paper in Clinical Research - Development and pilot study to validate a headache clinical decision support tool. Indian Society of Study of Pain, ISSPCON, Hyderabad.',
    year: '2026',
  },
]

import { useRef } from 'react'

export default function Awards() {
  const scrollRef = useRef(null)

  const scrollBy = dir => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="awards" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Recognition</span>
          <h3>
            Awards &amp;{' '}
            <span className="italic" style={{ color: 'var(--ink)' }}>distinctions</span>{' '}
            earned along the way.
          </h3>
        </div>

        <div className="awards-scroll-wrap">
          <div className="awards-scroll" ref={scrollRef}>
            {AWARDS.map(a => (
              <div className="award" key={a.ribbon}>
                <span className="ribbon">{a.ribbon}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className="yr-tag">{a.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="awards-nav">
          <button type="button" className="awards-nav-btn" aria-label="Scroll left" onClick={() => scrollBy(-1)}>←</button>
          <button type="button" className="awards-nav-btn" aria-label="Scroll right" onClick={() => scrollBy(1)}>→</button>
        </div>
      </div>
    </section>
  )
}
