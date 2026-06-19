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

export default function Awards() {
  return (
    <section id="awards" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Recognition</span>
          <h2>
            Awards &amp;{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>distinctions</span>{' '}
            earned along the way.
          </h2>
          <p className="sub">
            Honours that reflect a sustained commitment to clinical excellence, research, and patient
            outcomes.
          </p>
        </div>

        <div className="awards-scroll-hint">
          <span className="scroll-hint-label">Scroll to explore</span>
          <span className="scroll-hint-arrow">→</span>
        </div>

        <div className="awards-scroll-wrap">
          <div className="awards-scroll">
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
      </div>
    </section>
  )
}
