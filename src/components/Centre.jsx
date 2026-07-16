export default function Centre() {
  return (
    <section id="centre" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">The Centre</span>
          <h3>
            JP Neuro Spine Hospital &amp;{' '}
            <span className="italic" style={{ color: 'var(--ink)' }}>Pain Management Centre.</span>
          </h3>
        </div>

        <div className="centre-grid">
          <div className="centre-text reveal">
            <p>
              Our centre is built around a single principle - that chronic pain deserves dedicated,
              specialist attention, not an afterthought tucked into another department.
            </p>
            <p>
              Equipped with C-arm fluoroscopy, ultrasound guidance, and a fully equipped procedure
              suite, we offer a complete spectrum of interventional and conservative pain treatments -
              alongside on-site rehabilitation and counselling support.
            </p>
            <div className="treat-grid">
              <div className="treat">
                <span className="rn">i.</span>
                <b>Neurosurgery</b>
                <small>Advanced surgical care for spine &amp; neurological conditions</small>
              </div>
              <div className="treat">
                <span className="rn">ii.</span>
                <b>Pain Medicine</b>
                <small>Interventional &amp; conservative pain management</small>
              </div>
            </div>
          </div>

          <a className="centre-viz reveal" href="https://www.jpneurospineandpain.com/" target="_blank" rel="noreferrer">
            <span className="visit">Visit Us At ↗</span>
            <div>
              <h3>JP Neuro Spine Hospital &amp; Pain Management Centre.</h3>
            </div>
            <div className="equips">
              <span>C-Arm Fluoroscopy</span>
              <span>Ultrasound Guidance</span>
              <span>Dedicated Procedure Suite</span>
              <span>On-site Rehabilitation</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
