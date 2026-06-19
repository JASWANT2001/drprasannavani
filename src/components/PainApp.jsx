export default function PainApp() {
  return (
    <section id="pain-app" className="sec-sky">
      <div className="wrap">
        <div className="app-full-grid">

          <div className="app-left reveal">
            <span className="tag">Headache Compass · Clinical Tool</span>
            <h2>
              Smarter headache{' '}
              <span className="italic" style={{ color: 'var(--rust)' }}>diagnosis,</span>{' '}
              built for the clinic.
            </h2>
            <p className="sub">
              A dedicated web platform where doctors get their own workspace to assess, track, and
              manage patients - turning headache consultations from guesswork into structured,
              data-driven diagnosis.
            </p>

            <div className="app-features">
              <div className="feature">
                <span className="fnum">i.</span>
                <div>
                  <b>Doctor Workspace</b>
                  <p>
                    Each doctor gets a private panel to manage their own patient list, run
                    assessments, and review history - completely separate from other providers.
                  </p>
                </div>
              </div>
              <div className="feature">
                <span className="fnum">ii.</span>
                <div>
                  <b>Structured Headache Assessment</b>
                  <p>
                    Step through a standardised clinical questionnaire with the patient in the
                    room. Results are logged instantly and linked to their profile.
                  </p>
                </div>
              </div>
            </div>

            <div className="app-cta">
              <a href="https://drprasannavani.com/dashboard" target="_blank" rel="noreferrer" className="btn btn-rust">Open Headache Compass →</a>
            </div>
          </div>

          <div className="app-right reveal">
            <div className="device-frame">
              {/* side buttons */}
              <div className="device-btn-vol" />
              <div className="device-btn-pwr" />
              {/* screen */}
              <div className="device-screen">
                {/* status bar */}
                <div className="device-status">
                  <span>9:41</span>
                  <div className="device-status-icons">
                    <span>▲</span>
                    <span>WiFi</span>
                    <span>⬛</span>
                  </div>
                </div>
                {/* app content */}
                <div className="device-content">
                  <span className="ph-tag">Headache Compass</span>
                  <h3 className="device-title">Dashboard</h3>
                  <div className="hc-stat-row">
                    <div className="hc-stat">
                      <span className="hc-num">3</span>
                      <span className="hc-lbl">Doctors</span>
                    </div>
                    <div className="hc-stat">
                      <span className="hc-num">2</span>
                      <span className="hc-lbl">Patients</span>
                    </div>
                    <div className="hc-stat">
                      <span className="hc-num">0</span>
                      <span className="hc-lbl">Active</span>
                    </div>
                  </div>
                  <span className="ph-tag" style={{ display:'block', marginBottom:'10px' }}>My Workspace</span>
                  <div className="entry">
                    <b>My Patients</b>
                    <small>View &amp; manage assigned patients</small>
                  </div>
                  <div className="entry">
                    <b>Add Patient</b>
                    <small>Start a new headache assessment</small>
                  </div>
                </div>
                {/* home indicator */}
                <div className="device-home" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
