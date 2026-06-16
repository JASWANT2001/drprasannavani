export default function PainApp() {
  return (
    <section id="pain-app" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Pain Journal · Web App</span>
          <h2>
            Your pain,{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>understood</span>{' '}
            between visits.
          </h2>
          <p className="sub">
            A companion web app for patients — log daily pain scores, triggers, and medication
            response. Walk into your next appointment with data, not guesswork.
          </p>
        </div>

        <div className="app-grid">
          <div className="reveal">
            <div className="feature">
              <span className="fnum">i.</span>
              <div>
                <b>Visual Pain Scale</b>
                <p>
                  Quick 1–10 logging with intensity, location markers, and quality tags — under
                  fifteen seconds per entry.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="fnum">ii.</span>
              <div>
                <b>Medication Diary</b>
                <p>
                  Track dosage, timing, and side-effects across your prescription cycle. Spot
                  what's working and what isn't.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="fnum">iii.</span>
              <div>
                <b>Trigger Patterns</b>
                <p>
                  Identify activities, foods, sleep, and weather correlations over time. Patterns
                  become visible after two weeks.
                </p>
              </div>
            </div>

            <div className="app-cta">
              <a href="#contact" className="btn btn-rust">Open Your Pain Journal →</a>
              <a href="#contact" className="btn btn-ghost-d">Request Access</a>
            </div>
          </div>

          <div className="reveal app-phone-col">
            <div className="phone">
              <div className="phone-screen">
                <span className="ph-tag">Tuesday · Today</span>
                <h3>How is your pain right now?</h3>
                <div className="scale">
                  <span>1</span>
                  <span>3</span>
                  <span>5</span>
                  <span>7</span>
                  <span>9</span>
                </div>
                <span className="ph-tag" style={{ display: 'block', marginBottom: '12px' }}>
                  Recent Entries
                </span>
                <div className="entry">
                  <b>Lower back · Score 6</b>
                  <small>After long sitting · Mon 8:42 PM</small>
                </div>
                <div className="entry">
                  <b>Right shoulder · Score 4</b>
                  <small>Morning stiffness · Mon 7:10 AM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
