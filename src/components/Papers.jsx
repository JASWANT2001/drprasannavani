import { useState } from 'react'

const PAPERS = [
  {
    year: '2017',
    title: 'Nitrogen gas embolism as a potential complication of cryosurgery for bone tumours.',
    authors: 'Prasanna Vani Vanamail, Kalpana Balakrishnan.',
    venue: 'Anaesthesia Cases/ 2017- 0244/ISSN 2396-8397',
    badge: 'Published', cls: 'pill-pub',
  },
  {
    year: '2018',
    title: 'A comparative study of levobupivacaine and rac-bupivacaine for caudal analgesia in pediatric subumblical surgeries.',
    authors: 'Sundararajan L, Vanamail Prasanna Vani.',
    venue: 'J. Evolution Med. Dent. Sci. 2018;7(11):0000-0000, DOI:10.14260/jemds/2018/0000',
    badge: 'Published', cls: 'pill-pub',
  },
  {
    year: '2019',
    title: 'Perioperative management of a patient with bleomycin lung injury and on dabigatran treatment for retro-peritoneal lymph node dissection: A case report.',
    authors: 'Vani Vanamail, P., & Balakrishnan, K.',
    venue: 'Indian Journal of Case Reports, 5(3), 289-291.',
    badge: 'Case Report', cls: 'pill-poster',
  },
  {
    year: '2020',
    title: 'A retrospective analysis of the presentation, outcomes and determinants of severity of postoperative pneumonia in upper abdominal oncological surgeries.',
    authors: 'Vanamail PV, Dash R, Balakrishnan K.',
    venue: 'Indian J Respir Care 2020;9:52-7',
    badge: 'Published', cls: 'pill-pub',
  },
  {
    year: '2021',
    title: 'Recurrent pulmonary thromboembolism during radical cystectomy: A case report.',
    authors: 'Prasanna Vani Vanamail, Radhika Dash, Kalpana Balakrishnan, & Thendral Edwin.',
    venue: 'Indian Journal of Case Reports, 260-262.',
    badge: 'Case Report', cls: 'pill-poster',
  },
  {
    year: '2021',
    title: 'Ultrasonographic Assessment of Diaphragmatic Inspiratory Amplitude and Its Association with Postoperative Pulmonary Complications in Upper Abdominal Surgery: A Prospective, Longitudinal, Observational Study.',
    authors: 'Vanamail PV, Balakrishnan K, Prahlad S, Chockalingam P, Dash R, Soundararajan DK.',
    venue: 'Indian J Crit Care Med 2021; 25 (9):1031-1039.',
    badge: 'Published', cls: 'pill-pub',
  },
  {
    year: '2026',
    title: 'Effect of Perioperative Anaemia and Blood Transfusion on Overall Survival in Major Cancer Surgery: A Retrospective Analysis.',
    authors: 'Vanamail, Prasanna Vani; Raj, Pritha; Balakrishnan, Kalpana; Ramasamy, Thendral; Gunasekaran, Praveen Kumar.',
    venue: 'Journal of Onco-Anaesthesiology and Perioperative Medicine 3(1):p 81-87, Jan-Apr 2026.',
    badge: 'Published', cls: 'pill-pub',
  },
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
            Peer-reviewed publications, conference presentations, and case studies in
            interventional pain medicine and anaesthesiology.
          </p>
        </div>

        <div className="papers-list reveal">
          {PAPERS.map((p, i) => {
            const isOpen = open.has(i)
            return (
              <div className={`paper-acc${isOpen ? ' acc-open' : ''}`} key={i}>
                <button className="paper-trigger" onClick={() => toggle(i)}>
                  <span className="paper-heading">
                    <span className="pyr">{String(i + 1).padStart(2, '0')}</span>
                    <span className="paper-ttl">{p.title}</span>
                  </span>
                  <span className="paper-arrow">↓</span>
                </button>
                <div className="paper-body">
                  <div className="paper-body-inner">
                    <p className="paper-authors">{p.authors}</p>
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
