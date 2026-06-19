export default function About() {
  return (
    <section id="about" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">About the Doctor</span>
          <h2>
            Trained at India's{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>finest institutions,</span>{' '}
            practised with{' '}
            <span className="italic" style={{ color: 'var(--ink)' }}>purpose.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="stat-stack reveal">
            <div className="stat-row">
              <span className="num">11<sup style={{fontSize:'.5em'}}>+</sup></span>
              <span className="lbl">Years · Pain Medicine</span>
            </div>
            <div className="stat-row">
              <span className="num" style={{fontSize:'clamp(1.4rem,2.8vw,2.1rem)',letterSpacing:'-.01em',lineHeight:1.2}}>Gold<br/>Medalist</span>
              <span className="lbl">MD Anaesthesiology</span>
            </div>
            <div className="stat-row">
              <span className="num" style={{fontSize:'clamp(1.1rem,2.2vw,1.6rem)',letterSpacing:'-.01em',lineHeight:1.25}}>AIIMS<br/>Cancer Institute</span>
              <span className="lbl">Prior Institutions</span>
            </div>
          </div>

          <div className="about-text reveal">
            <p>
              Dr. Prasanna Vani V is a specialist in Pain Medicine and Anesthesiology, holding M.B.B.S. and
              M.D. degrees with postgraduate training in critical care and pain - further credentialled as
              C.C.E.P.C., F.I.P.M, and E.D.P.M. She trained as Senior Resident at AIIMS New Delhi and served
              as Assistant Professor at the Cancer Institute, Adyar, before dedicating her practice
              exclusively to interventional pain medicine.
            </p>
            <p>
              At JP Neuro Spine Hospital &amp; Pain Management Centre, she sees patients for chronic headache
              disorders, spinal and neuropathic pain, cancer pain, fibromyalgia, post-surgical pain, and
              complex conditions like CRPS and trigeminal neuralgia - using fluoroscopy, DSA-guided procedures,
              musculoskeletal ultrasound, and neuromodulation to deliver precise, minimally invasive care.
            </p>
            <div className="specialties">
              <span>Interventional Pain</span>
              <span>Spinal &amp; Neuropathic Pain</span>
              <span>Cancer Pain</span>
              <span>Headache Disorders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
