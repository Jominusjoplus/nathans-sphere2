'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'general', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrapper bg-off-white border-top">
      <div className="section-container" style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            Connect
          </p>
          <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: 'var(--dark)', marginBottom: 16, lineHeight: 1.1 }}>
            Enter the Sphere
          </h2>
          <p style={{ fontSize: 14, color: 'var(--warm-gray)', fontWeight: 300, lineHeight: 1.8 }}>
            For private appointments, press, and wholesale partnerships.
          </p>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '80px 0', border: '0.5px solid var(--stone)', background: 'var(--white)' }}>
            <p style={{ fontFamily: 'Cormorant, serif', fontSize: 36, color: 'var(--dark)', marginBottom: 12 }}>
              Thank you.
            </p>
            <p style={{ fontSize: 13, color: 'var(--warm-gray)', fontWeight: 300 }}>
              We&apos;ll be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Name + Email */}
            <div className="contact-form-grid">
              <div>
                <label style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>
                  Full Name
                </label>
                <input
                  required type="text" value={form.name}
                  onChange={set('name')} placeholder="Your name"
                  className="contact-input"
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--dark)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'var(--stone)')}
                />
              </div>
              <div>
                <label style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>
                  Email
                </label>
                <input
                  required type="email" value={form.email}
                  onChange={set('email')} placeholder="your@email.com"
                  className="contact-input"
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--dark)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'var(--stone)')}
                />
              </div>
            </div>

            {/* Interest */}
            <div>
              <label style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>
                Area of Interest
              </label>
              <select value={form.interest} onChange={set('interest')} className="contact-select" style={{ cursor: 'pointer' }}>
                <option value="general">General Inquiry</option>
                <option value="bespoke">Bespoke Commission</option>
                <option value="wholesale">Wholesale Partnership</option>
                <option value="press">Press & Media</option>
                <option value="collab">Collaboration</option>
                <option value="invest">Investment & Growth</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>
                Message
              </label>
              <textarea
                required rows={5} value={form.message}
                onChange={set('message')} placeholder="Tell us how we can serve you..."
                className="contact-textarea"
                onFocus={e => (e.target.style.borderColor = 'var(--dark)')}
                onBlur={e => (e.target.style.borderColor = 'var(--stone)')}
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <p style={{ fontSize: 12, color: '#c0392b' }}>
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="contact-submit"
              style={{ opacity: status === 'loading' ? 0.6 : 1 }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--black)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark)')}
            >
              {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}