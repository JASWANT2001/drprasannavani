export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>
            Relief that <span className="italic-gold">listens.</span>
            <br />
            Care that <span className="italic-w">restores.</span>
          </h1>
          <p className="hero-lead">
            A decade of interventional pain medicine, practised at JP Neuro Spine Hospital &amp; Pain
            Management Centre — combining image-guided precision with the kind of unhurried,
            patient-first consultation chronic pain actually needs.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Book a Consultation <span>→</span></a>
            <a href="#about"   className="btn btn-ghost-w">Meet Dr. Vani</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <span className="pv">PV</span>
          </div>

          <div className="float f1">
            <span className="deco">✦</span>
            <span className="bignum">15<sup>+</sup></span>
            <span className="label">Years · Pain Medicine</span>
          </div>

          <div className="float f2">
            <span className="deco">★</span>
            <span className="bignum">8<sup>+</sup></span>
            <span className="label">National &amp; Global Awards</span>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Chronic Spinal Pain <i className="star">✦</i>{' '}
            Neuropathic Syndromes <i className="star">✦</i>{' '}
            Cancer Pain <i className="star">✦</i>{' '}
            CRPS <i className="star">✦</i>{' '}
            Headache Disorders <i className="star">✦</i>{' '}
            Image-Guided Interventions <i className="star">✦</i>
          </span>
          <span>
            Chronic Spinal Pain <i className="star">✦</i>{' '}
            Neuropathic Syndromes <i className="star">✦</i>{' '}
            Cancer Pain <i className="star">✦</i>{' '}
            CRPS <i className="star">✦</i>{' '}
            Headache Disorders <i className="star">✦</i>{' '}
            Image-Guided Interventions <i className="star">✦</i>
          </span>
        </div>
      </div>
    </header>
  )
}
