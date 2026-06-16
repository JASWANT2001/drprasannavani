export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="flogo">Dr. Prasanna Vani</div>
            <p>
              Practicing at JP Neuro Spine Hospital &amp; Pain Management Centre.
              Compassionate, evidence-based interventional pain care.
            </p>
          </div>

          <div className="foot-explore">
            <div>
              <h5>Explore</h5>
              <a href="#about">About</a>
              <a href="#papers">Papers</a>
              <a href="#awards">Awards</a>
              <a href="#memberships">Memberships</a>
            </div>
            <div>
              <h5>Explore</h5>
              <a href="#pain-app">Pain Journal</a>
              <a href="#partner">Partner With Us</a>
              <a href="#centre">The Centre</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h5>Contact Info</h5>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <a href="mailto:contact@drprasannavani.com">contact@drprasannavani.com</a>
            <a>Mon – Sat · 10 AM – 7 PM</a>
            <a>JP Neuro Spine Hospital &amp; Pain Management Centre</a>
          </div>
        </div>

        <div className="foot-base">
          <span>© 2026 Dr. Prasanna Vani · All rights reserved.</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
