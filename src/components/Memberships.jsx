const MEMBERS = [
  { gk: 'α', code: 'ISSP', name: 'Indian Society for the Study of Pain',              detail: 'Life Member' },
  { gk: 'β', code: 'WIP',  name: 'World Institute of Pain',                           detail: 'Certified Fellow - FIPP' },
]

export default function Memberships() {
  return (
    <section id="memberships" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Memberships &amp; Accreditations</span>
          <h3>
            Affiliated with the{' '}
            <span className="italic" style={{ color: 'var(--ink)' }}>societies</span>{' '}
            shaping modern pain medicine.
          </h3>
        </div>

        <div className="mem-grid">
          {MEMBERS.map(m => (
            <div className="mem" key={m.code}>
              <span className="gk">{m.gk}</span>
              <div className="mem-body">
                <b className="mem-code">{m.code}</b>
                <p className="mem-name">{m.name}</p>
                <span className="mem-detail">{m.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
