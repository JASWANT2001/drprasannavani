const CARDS = [
  { pn: 'i.',   title: 'Referring Physicians', desc: 'Refer patients with complex pain presentations and receive structured follow-up reports. We respect the relationship between you and your patient.' },
  { pn: 'ii.',  title: 'Hospitals & Clinics',  desc: 'Visiting consultant arrangements, multidisciplinary pain clinics, and shared procedural protocols. We bring the practice; you bring the patients.' },
  { pn: 'iii.', title: 'Corporate & Insurance', desc: 'Employee wellness, structured back-pain programmes, and second-opinion services for insurers. Better outcomes, fewer days lost.' },
  { pn: 'iv.',  title: 'NGOs & Palliative Care', desc: 'Pro-bono cancer pain clinics, training for community health workers, and access programmes for under-served patients.' },
]

export default function Partner() {
  return (
    <section id="partner" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Collaboration</span>
          <h2>
            Partner <span className="italic" style={{ color: 'var(--ink)' }}>with us.</span>
          </h2>
          <p className="sub">
            Whether you're a hospital, primary care physician, employer, or NGO - pain care gets
            better when expertise is shared. Here's how we work together.
          </p>
        </div>

        <div className="partner-grid">
          {CARDS.map(c => (
            <a href="#contact" className="pcard reveal" key={c.pn}>
              <span className="arr">↗</span>
              <div>
                <span className="pn">{c.pn}</span>
                <h3>{c.title}</h3>
              </div>
              <p>{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
