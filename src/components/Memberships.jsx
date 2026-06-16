const MEMBERS = [
  { gk: 'α', code: 'ISSP',  name: 'Indian Society for the Study of Pain — Life Member' },
  { gk: 'β', code: 'WIP',   name: 'World Institute of Pain — Certified FIPP'           },
  { gk: 'γ', code: 'IASP',  name: 'International Association for the Study of Pain'    },
  { gk: 'δ', code: 'IMA',   name: 'Indian Medical Association — Active Member'         },
  { gk: 'ε', code: 'IAPC',  name: 'Indian Association of Palliative Care'              },
  { gk: 'ζ', code: 'SPI',   name: 'Spine Society of India — Associate Member'          },
]

export default function Memberships() {
  return (
    <section id="memberships" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Memberships &amp; Accreditations</span>
          <h2>
            Affiliated with the{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>societies</span>{' '}
            shaping modern pain medicine.
          </h2>
        </div>

        <div className="mem-grid">
          {MEMBERS.map(m => (
            <div className="mem reveal" key={m.code}>
              <span className="gk">{m.gk}</span>
              <b>{m.code}</b>
              <small>{m.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
