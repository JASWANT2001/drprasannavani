export default function PainApp() {
  return (
    <section id="pain-app" className="sec-sky">
      <div className="wrap">
        <div className="app-full-grid">

          <div className="app-left reveal">
            <span className="tag">Headache Compass · Clinical Tool</span>
            <h3>
              Smarter headache{' '}
              <span className="italic" style={{ color: 'var(--ink)' }}>diagnosis,</span>{' '}
              built for the clinic.
            </h3>
            <div className="app-features">
              <div className="feature">
                <span className="fnum">i.</span>
                <div>
                  <b>Dedicated Web Platform</b>
                  <p>
                    A dedicated platform giving doctors their own workspace to assess, track, and
                    manage patients - turning consultations into data-driven diagnosis.
                  </p>
                  <a href="https://drprasannavani.com/dashboard" target="_blank" rel="noreferrer" className="feature-link">Open Headache Compass <span className="arr">→</span></a>
                </div>
              </div>
              <div className="feature">
                <span className="fnum">ii.</span>
                <div>
                  <b>Doctor Workspace</b>
                  <p>
                    Each doctor gets a private panel to manage their own patient list, run
                    assessments, and review history - completely separate from other providers.
                  </p>
                  <a href="https://drprasannavani.com/dashboard" target="_blank" rel="noreferrer" className="feature-link">Open Headache Compass <span className="arr">→</span></a>
                </div>
              </div>
              <div className="feature">
                <span className="fnum">iii.</span>
                <div>
                  <b>Structured Headache Assessment</b>
                  <p>
                    Step through a standardised clinical questionnaire with the patient in the
                    room. Results are logged instantly and linked to their profile.
                  </p>
                  <a href="https://drprasannavani.com/dashboard" target="_blank" rel="noreferrer" className="feature-link">Open Headache Compass <span className="arr">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="app-right reveal">
            <div className="browser-frame">
              {/* browser top bar */}
              <div className="browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <div className="browser-url">
                  <span className="browser-lock">🔒</span>
                  app.drprasannavani.com
                </div>
              </div>
              {/* app window */}
              <div className="browser-body">
                <aside className="hc-side">
                  <span className="hc-logo">HC</span>
                  <span className="hc-nav-item is-active" />
                  <span className="hc-nav-item" />
                  <span className="hc-nav-item" />
                  <span className="hc-nav-item" />
                </aside>
                <div className="hc-main">
                  <div className="hc-head">
                    <div>
                      <span className="ph-tag">Headache Compass</span>
                      <h3 className="hc-title">Dashboard</h3>
                    </div>
                    <span className="hc-avatar">PV</span>
                  </div>
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
                  <span className="ph-tag" style={{ display:'block', margin:'4px 0 10px' }}>My Workspace</span>
                  <div className="entry">
                    <b>My Patients</b>
                    <small>View &amp; manage assigned patients</small>
                  </div>
                  <div className="entry">
                    <b>Add Patient</b>
                    <small>Start a new headache assessment</small>
                  </div>
                  <div className="entry">
                    <b>Assessment History</b>
                    <small>Review logged questionnaires</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
