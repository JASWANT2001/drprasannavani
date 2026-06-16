import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: 'Chronic back pain', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name.trim()) { alert('Please enter your name.'); return }
    alert(`Thank you, ${form.name}! Your message has been received. We will get back to you within one working day.`)
    setForm({ name: '', phone: '', email: '', concern: 'Chronic back pain', message: '' })
  }

  return (
    <section id="contact" className="sec-sky">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">Get in Touch</span>
          <h2>
            Begin your{' '}
            <span className="italic" style={{ color: 'var(--rust)' }}>recovery</span>{' '}
            with a conversation.
          </h2>
          <p className="sub">
            Send us a note and we'll get back to you within one working day. For urgent concerns,
            please call directly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="cinfo reveal">
            <div className="crow">
              <div className="icon-c">⊙</div>
              <div>
                <div className="cl">Address</div>
                <div className="cv">JP Neuro Spine Hospital &amp; Pain Management Centre</div>
              </div>
            </div>
            <div className="crow">
              <div className="icon-c">☎</div>
              <div>
                <div className="cl">Phone</div>
                <div className="cv">+91 00000 00000</div>
              </div>
            </div>
            <div className="crow">
              <div className="icon-c">✉</div>
              <div>
                <div className="cl">Email</div>
                <div className="cv">contact@drprasannavani.com</div>
              </div>
            </div>
            <div className="crow">
              <div className="icon-c">⌚</div>
              <div>
                <div className="cl">Clinic Hours</div>
                <div className="cv">Mon – Sat · 10 AM – 7 PM</div>
              </div>
            </div>
            <div className="crow">
              <div className="icon-c">+</div>
              <div>
                <div className="cl">Emergency</div>
                <div className="cv">Hospital reception · 24/7</div>
              </div>
            </div>
          </div>

          <div className="form-card reveal">
            <div className="form-title">Send us a note —</div>
            <div className="frow">
              <div className="fg">
                <label htmlFor="fname">Full Name</label>
                <input id="fname" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} />
              </div>
              <div className="fg">
                <label htmlFor="fphone">Phone</label>
                <input id="fphone" name="phone" type="tel" placeholder="+91"
                  value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="femail">Email Address</label>
              <input id="femail" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="fg">
              <label htmlFor="fconcern">Primary Concern</label>
              <select id="fconcern" name="concern" value={form.concern} onChange={handleChange}>
                <option>Chronic back pain</option>
                <option>Neck / shoulder pain</option>
                <option>Neuropathic pain</option>
                <option>Cancer pain management</option>
                <option>Headache / migraine</option>
                <option>Partnership enquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="fmsg">Message</label>
              <textarea id="fmsg" name="message" placeholder="Tell us briefly what brings you here..."
                value={form.message} onChange={handleChange} />
            </div>
            <button className="btn btn-gold" onClick={handleSubmit}>
              Send Message <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
