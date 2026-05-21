'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '18px 24px' : '28px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.5s ease',
        background: scrolled || menuOpen ? 'rgba(250,250,248,0.96)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '0.5px solid var(--stone)' : '0.5px solid transparent',
      }}>

        {/* Logo — always center on mobile, left on desktop */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ fontFamily: 'Cormorant, serif', fontSize: 20, fontWeight: 400, color: 'var(--dark)', letterSpacing: '0.06em', lineHeight: 1 }}>
            Nathan&apos;s Sphere
          </div>
          <div style={{ fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 4 }}>
            Fashion House
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ display: 'block', width: 22, height: '0.5px', background: 'var(--dark)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: '0.5px', background: 'var(--dark)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: '0.5px', background: 'var(--dark)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99,
        background: 'var(--white)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 40,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {['Collections', 'Featured Brands', 'Atelier', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '')}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Cormorant, serif', fontSize: 36, fontWeight: 300,
              fontStyle: 'italic', color: 'var(--dark)', textDecoration: 'none',
              letterSpacing: '0.04em', transition: 'color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--dark)'; }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}