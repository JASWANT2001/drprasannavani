const AWARDS = [
  { ribbon: 'i.',   title: 'Best Paper Award',              desc: 'Recognised for outstanding clinical research presented at the ISSPCON Annual Conference.',                            year: '2024' },
  { ribbon: 'ii.',  title: 'Young Pain Physician of the Year', desc: 'Awarded by the Indian Society for the Study of Pain for contributions to interventional practice.',                year: '2023' },
  { ribbon: 'iii.', title: 'Excellence in Patient Care',    desc: 'Hospital-wide recognition for consistently high patient satisfaction and clinical outcomes.',                          year: '2022' },
  { ribbon: 'iv.',  title: 'WIP Travel Fellowship',         desc: 'Awarded to attend the World Institute of Pain advanced interventional training programme.',                            year: '2021' },
  { ribbon: 'v.',   title: 'Best Poster Presentation',      desc: 'Asia Pacific Pain Symposium — research on stellate ganglion interventions in CRPS.',                                  year: '2020' },
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

        <div className="awards-grid">
          {AWARDS.map(a => (
            <div className="award reveal" key={a.ribbon}>
              <span className="ribbon">{a.ribbon}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <span className="yr-tag">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
