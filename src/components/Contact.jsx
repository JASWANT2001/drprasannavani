import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_gopt8y5'
const TEMPLATE_ID = 'template_ebsl4kp'
const PUBLIC_KEY  = 'ctepv1oGsrcCxPkH4'

function Toast({ toasts }) {
  return (
    <div className="toast-wrap">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <span className="toast-icon">{t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : '!'}</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  const [form, setForm]     = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [toasts, setToasts] = useState([])

  const addToast = (msg, type = 'info') => {
    const id = Date.now()
    setToasts(t => [...t, { id, msg, type }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4000)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim())  errs.name  = 'Full name is required.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    return errs
  }

  const handleSubmit = async () => {
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      Object.values(errs).forEach(msg => addToast(msg, 'warn'))
      return
    }

    setSending(true)
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name:    form.name,
        phone:   form.phone,
        email:   form.email,
        message: form.message,
      }, PUBLIC_KEY)

      addToast('Message sent! We\'ll get back to you within one working day.', 'success')
      setForm({ name: '', phone: '', email: '', message: '' })
      setErrors({})
    } catch {
      addToast('Something went wrong. Please try calling us directly.', 'error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="sec-sky">
      <Toast toasts={toasts} />
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

        <div className="contact-info-row reveal">
          <div className="crow">
            <div className="icon-c">☎</div>
            <div>
              <div className="cl">Phone</div>
              <a className="cv" href="tel:+918754870054">+91 87548 70054</a>
            </div>
          </div>
          <div className="crow">
            <div className="icon-c">✉</div>
            <div>
              <div className="cl">Email</div>
              <div className="cv">drprasannavani.painmedicine@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="form-card-full reveal">
          <div className="form-title">Send us a note -</div>
          <div className="form-row-3">
            <div className="fg">
              <label htmlFor="fname">Full Name <span className="req">*</span></label>
              <input id="fname" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange}
                className={errors.name ? 'input-err' : ''} />
              {errors.name && <span className="field-err">{errors.name}</span>}
            </div>
            <div className="fg">
              <label htmlFor="fphone">Phone <span className="req">*</span></label>
              <input id="fphone" name="phone" type="tel" placeholder="+91"
                value={form.phone} onChange={handleChange}
                className={errors.phone ? 'input-err' : ''} />
              {errors.phone && <span className="field-err">{errors.phone}</span>}
            </div>
            <div className="fg">
              <label htmlFor="femail">Email Address</label>
              <input id="femail" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange} />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="fmsg">Message</label>
            <textarea id="fmsg" name="message" placeholder="Tell us briefly what brings you here..."
              value={form.message} onChange={handleChange} />
          </div>

          <button className="btn btn-gold" onClick={handleSubmit} disabled={sending}>
            {sending ? 'Sending…' : <>Send Message <span>→</span></>}
          </button>
        </div>
      </div>
    </section>
  )
}
