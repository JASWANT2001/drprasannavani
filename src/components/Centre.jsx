export default function Centre() {
  return (
    <section id="centre" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">The Centre</span>
          <h2>
            JP Neuro Spine Hospital &amp;{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>Pain Management Centre.</span>
          </h2>
        </div>

        <div className="centre-grid">
          <div className="centre-text reveal">
            <p>
              Our centre is built around a single principle — that chronic pain deserves dedicated,
              specialist attention, not an afterthought tucked into another department.
            </p>
            <p>
              Equipped with C-arm fluoroscopy, ultrasound guidance, and a fully equipped procedure
              suite, we offer a complete spectrum of interventional and conservative pain treatments —
              alongside on-site rehabilitation and counselling support.
            </p>
            <div className="treat-grid">
              <div className="treat">
                <span className="rn">i.</span>
                <b>Epidural Injections</b>
                <small>Caudal, interlaminar, transforaminal</small>
              </div>
              <div className="treat">
                <span className="rn">ii.</span>
                <b>Radiofrequency Ablation</b>
                <small>Conventional &amp; pulsed RF</small>
              </div>
              <div className="treat">
                <span className="rn">iii.</span>
                <b>Nerve Blocks</b>
                <small>Diagnostic &amp; therapeutic</small>
              </div>
            </div>
          </div>

          <div className="centre-viz reveal">
            <span className="visit">Visit Us At</span>
            <div>
              <h3>JP Neuro Spine<br />Hospital &amp; Pain<br />Centre.</h3>
            </div>
            <div className="equips">
              <span>C-Arm Fluoroscopy</span>
              <span>Ultrasound Guidance</span>
              <span>Dedicated Procedure Suite</span>
              <span>On-site Rehabilitation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
