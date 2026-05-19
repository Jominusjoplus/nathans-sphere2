'use client';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      padding: '72px 48px 40px',
      borderTop: '0.5px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 80, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Cormorant, serif', fontSize: 28, color: 'var(--white)', marginBottom: 8, letterSpacing: '0.04em' }}>
              Nathan&apos;s Sphere
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
              Fashion House
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.9, color: 'rgba(255,255,255,0.3)', fontWeight: 300, maxWidth: 280 }}>
              A Nigerian luxury fashion house with global authority. Built on craft, intention, and the quiet power of knowing your worth.
            </p>
          </div>

          {/* Sub-brands */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
              The Universe
            </p>
            {['Sub-Brand One', 'Sub-Brand Two', 'Sub-Brand Three', 'Sub-Brand Four'].map(b => (
              <a key={b} href="#subbrands" style={{
                display: 'block', fontSize: 13,
                color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
                marginBottom: 12, fontWeight: 300, transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >{b}</a>
            ))}
          </div>

          {/* Atelier */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
              Atelier
            </p>
            {['Private Appointments', 'Press & Media', 'Wholesale', 'Careers', 'Sustainability'].map(l => (
              <a key={l} href="#contact" style={{
                display: 'block', fontSize: 13,
                color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
                marginBottom: 12, fontWeight: 300, transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '0.5px solid rgba(255,255,255,0.06)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Nathan&apos;s Sphere. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Instagram', 'Twitter / X', 'Pinterest'].map(s => (
              <a key={s} href="#" style={{
                fontSize: 11, color: 'rgba(255,255,255,0.2)',
                textDecoration: 'none', transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
              >{s}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}