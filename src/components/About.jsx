export default function About() {
  return (
    <section id="about" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">About the Doctor</span>
          <h2>
            A practice rooted in{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>compassion,</span>{' '}
            guided by{' '}
            <span className="italic" style={{ color: 'var(--ink)' }}>evidence.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="stat-stack reveal">
            <div className="stat-row">
              <span className="num"><span data-count="15">0</span>+</span>
              <span className="lbl">Years of clinical practice</span>
            </div>
            <div className="stat-row">
              <span className="num"><span data-count="20">0</span>+</span>
              <span className="lbl">Research papers presented</span>
            </div>
            <div className="stat-row">
              <span className="num"><span data-count="8">0</span>+</span>
              <span className="lbl">National &amp; international awards</span>
            </div>
          </div>

          <div className="about-text reveal">
            <p>
              Dr. Prasanna Vani leads the interventional pain practice at JP Neuro Spine Hospital &amp;
              Pain Management Centre, with a focus on minimally invasive, image-guided procedures and
              long-term functional recovery.
            </p>
            <p>
              Her clinical interests span chronic spinal pain, neuropathic pain syndromes, cancer pain,
              and complex regional pain syndrome. She is known among patients and peers for unhurried
              consultations, shared decision-making, and a commitment to combining procedural precision
              with rehabilitation and lifestyle care.
            </p>
            <p>
              Beyond clinical practice, Dr. Vani actively contributes to the field through research,
              teaching, and advocacy for better pain literacy in India.
            </p>
            <div className="specialties">
              <span>Interventional Pain</span>
              <span>Spinal Pain</span>
              <span>Neuropathic Pain</span>
              <span>Cancer Pain</span>
              <span>CRPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
