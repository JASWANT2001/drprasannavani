import { useState } from 'react'

const PAPERS = [
  { year: '2024', title: 'Ultrasound-Guided Genicular Nerve Block in Chronic Knee Osteoarthritis',  venue: 'Conference / journal details to be updated.', badge: 'Podium',    cls: 'pill-podium' },
  { year: '2023', title: 'Pulsed Radiofrequency for Post-Herpetic Neuralgia: A Case Series',        venue: 'Conference / journal details to be updated.', badge: 'Oral',      cls: 'pill-oral'   },
  { year: '2023', title: 'Transforaminal Epidural Steroid Injections in Lumbar Radiculopathy',      venue: 'Conference / journal details to be updated.', badge: 'Published', cls: 'pill-pub'    },
  { year: '2022', title: 'Cervical Facet Joint Interventions: Outcomes at Twelve Months',           venue: 'Conference / journal details to be updated.', badge: 'Poster',    cls: 'pill-poster' },
]

export default function Papers() {
  const [open, setOpen] = useState(new Set())

  const toggle = i => setOpen(prev => {
    const next = new Set(prev)
    next.has(i) ? next.delete(i) : next.add(i)
    return next
  })

  return (
    <section id="papers" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Research &amp; Scholarship</span>
          <h2>
            Papers <span className="italic" style={{ color: 'var(--rust)' }}>presented</span> at
            national &amp; international forums.
          </h2>
          <p className="sub">
            Selected scholarly contributions in interventional pain medicine — peer-reviewed
            publications, conference presentations, and case studies.
          </p>
        </div>

        <div className="papers-list reveal">
          {PAPERS.map((p, i) => {
            const isOpen = open.has(i)
            return (
              <div className={`paper-acc${isOpen ? ' acc-open' : ''}`} key={i}>
                <button className="paper-trigger" onClick={() => toggle(i)}>
                  <span className="paper-heading">
                    <span className="pyr">{p.year}</span>
                    <span className="paper-ttl">{p.title}</span>
                  </span>
                  <span className="paper-arrow">↓</span>
                </button>
                <div className="paper-body">
                  <div className="paper-body-inner">
                    <p className="paper-venue">{p.venue}</p>
                    <span className={`pill ${p.cls}`}>{p.badge}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
