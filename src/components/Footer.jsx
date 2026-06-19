export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="flogo">Dr. Prasanna Vani V</div>
            <p>
              Dr. Prasanna Vani V is a specialist in Pain Medicine and Anesthesiology, holding
              M.B.B.S. and M.D. degrees with postgraduate training in critical care and pain.
            </p>
          </div>

          <div className="foot-explore">
            <div>
              <h5>Explore</h5>
              <a href="#about">About</a>
              <a href="#papers">Research Papers</a>
              <a href="#awards">Awards &amp; Honours</a>
            </div>
            <div>
              <h5>Explore</h5>
              <a href="#memberships">Memberships</a>
              <a href="#pain-app">Pain App</a>
              <a href="#centre">Pain Centre</a>
            </div>
          </div>

          <div>
            <h5>Contact Info</h5>
            <a href="tel:+918754870054">📞 +91 87548 70054</a>
            <a href="mailto:drprasannavani.painmedicine@gmail.com">✉️ drprasannavani.painmedicine@gmail.com</a>
            <a>🏥 JP Neuro Spine Hospital &amp; Pain Management Centre</a>
          </div>
        </div>

        <div className="foot-base">
          <span>© 2026 Dr. Prasanna Vani V · All rights reserved.</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
