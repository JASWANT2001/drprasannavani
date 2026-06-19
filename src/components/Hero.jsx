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
            Management Centre - combining image-guided precision with the kind of unhurried,
            patient-first consultation chronic pain actually needs.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Book a Consultation <span>→</span></a>
            <a href="#about"   className="btn btn-ghost-w">Meet Dr. Vani</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <img
              src="https://ik.imagekit.io/glvwzrukg/JP%20Webiste/dr.prasanna%20vani%20.jpeg"
              alt="Dr. Prasanna Vani V"
              className="portrait-img"
            />
          </div>

          <div className="float f1">
            <span className="deco">✦</span>
            <span className="bignum">11<sup>+</sup></span>
            <span className="label">Years · Pain Medicine</span>
          </div>

        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Chronic Headache Disorders <i className="star">✦</i>{' '}
            Slipped Disc &amp; Sciatica <i className="star">✦</i>{' '}
            Neuropathic Pain <i className="star">✦</i>{' '}
            Cancer Pain <i className="star">✦</i>{' '}
            Fibromyalgia &amp; Myofascial Pain <i className="star">✦</i>{' '}
            Trigeminal Neuralgia <i className="star">✦</i>{' '}
            Post Herpetic Neuralgia <i className="star">✦</i>{' '}
            Spasticity Management <i className="star">✦</i>{' '}
            Fluoroscopy &amp; DSA Guided Procedures <i className="star">✦</i>{' '}
            Neuromodulation &amp; Radiofrequency Ablation <i className="star">✦</i>
          </span>
          <span>
            Chronic Headache Disorders <i className="star">✦</i>{' '}
            Slipped Disc &amp; Sciatica <i className="star">✦</i>{' '}
            Neuropathic Pain <i className="star">✦</i>{' '}
            Cancer Pain <i className="star">✦</i>{' '}
            Fibromyalgia &amp; Myofascial Pain <i className="star">✦</i>{' '}
            Trigeminal Neuralgia <i className="star">✦</i>{' '}
            Post Herpetic Neuralgia <i className="star">✦</i>{' '}
            Spasticity Management <i className="star">✦</i>{' '}
            Fluoroscopy &amp; DSA Guided Procedures <i className="star">✦</i>{' '}
            Neuromodulation &amp; Radiofrequency Ablation <i className="star">✦</i>
          </span>
        </div>
      </div>
    </header>
  )
}
