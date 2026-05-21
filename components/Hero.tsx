'use client';
import Image from 'next/image';
import nathansSphere from '@/public/src/image/nathans_sphere.jpeg';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--off-white)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 80px',
    }}>

      {/* Background NS watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant, serif',
        fontSize: 'clamp(160px, 22vw, 280px)',
        fontWeight: 300, color: 'var(--stone)',
        letterSpacing: '-0.02em', userSelect: 'none',
        lineHeight: 1, pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        NS
      </div>

      {/* Image slot — top right */}
      <div style={{
        position: 'absolute',
        top: 80, right: 48, bottom: 160,
        width: '38%',
        height: '60%',
        background: 'var(--stone)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
            <Image src={nathansSphere} fill style={{ objectFit: 'cover' }} alt="Nathan's Sphere" priority />
       
        <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>
          Hero Image
        </p>
      </div>

      {/* Bottom left content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 520 }}>
        <p className="fade-up delay-1" style={{
          fontSize: 10, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20,
        }}>
          Lagos · London · The World
        </p>

        <h1 className="fade-up delay-2" style=
        {{
          fontFamily: 'Cormorant, serif',
          fontSize: 'clamp(48px, 6.5vw, 86px)',
          fontWeight: 300, lineHeight: 1.08,
          color: 'var(--dark)', letterSpacing: '-0.01em',
          marginBottom: 32,
        }}>
          Fashion built<br />
          <em>for those who</em><br />
          know their worth.
        </h1>

        <div className="fade-up delay-3" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="#collections" style={{
            display: 'inline-block', padding: '14px 36px',
            background: 'var(--dark)', color: 'var(--white)',
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'background 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--black)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark)')}
          >
            Explore
          </a>

          <a href="#subbrands" style={{
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--warm-gray)', textDecoration: 'none',
            borderBottom: '0.5px solid var(--stone)', paddingBottom: 2,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--dark)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
          >
            Our Universe →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, right: 48,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <div style={{ width: '0.5px', height: 48, background: 'var(--warm-gray)', opacity: 0.4 }} />
        <p style={{
          fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--warm-gray)', writingMode: 'vertical-rl',
        }}>Scroll</p>
      </div>
    </section>
  );
}