import { useState } from 'react'
import emailjs from '@emailjs/browser/es'
import MotionSection from './MotionSection'

const EMAILJS_SERVICE_ID = 'service_5pxdqem'
const EMAILJS_TEMPLATE_ID = 'template_qf671nq'
const EMAILJS_PUBLIC_KEY = 'gNz9s5PTSPOJAKL0e'

const links = [
  {
    label: 'Email',
    value: 'inupamacaldera@gmail.com',
    href: 'mailto:inupamacaldera@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Inupama Caldera',
    href: 'https://www.linkedin.com/in/inupama-caldera',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Inupama',
    href: 'https://github.com/Inupama',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    const { name, email, message } = form
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('Message sent successfully. I will get back to you soon!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Something went wrong. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <MotionSection id="contact" className="bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-navy dark:text-white">Contact</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-teal" />
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          Open to collaborations, internships, and project opportunities. Reach out anytime.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-teal dark:border-slate-600 dark:hover:border-teal"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {link.label}
                    </p>
                    <p className="font-medium text-navy dark:text-white">{link.value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-light-gray p-6 dark:border-slate-600 dark:bg-slate-800"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            {status && (
              <p className="mt-4 text-center text-sm text-teal">{status}</p>
            )}
          </form>
        </div>
      </div>
    </MotionSection>
  )
}
