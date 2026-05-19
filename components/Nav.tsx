'use client';

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '28px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Left links */}
      <div style={{ display: 'flex', gap: 40 }}>
        {['Collections', 'Sub-Brands'].map(link => (
          <a key={link} href={`#${link.toLowerCase().replace('-','')}`} style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--warm-gray)', textDecoration: 'none', fontWeight: 400,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
          >{link}</a>
        ))}
      </div>

      {/* Center logo */}
      <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ fontFamily: 'Cormorant, serif', fontSize: 22, fontWeight: 400, color: 'var(--dark)', letterSpacing: '0.06em', lineHeight: 1 }}>
          Nathan&apos;s Sphere
        </div>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 4 }}>
          Fashion House
        </div>
      </div>

      {/* Right links */}
      <div style={{ display: 'flex', gap: 40 }}>
        {['Atelier', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--warm-gray)', textDecoration: 'none', fontWeight: 400,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
          >{link}</a>
        ))}
      </div>
    </nav>
  );
}