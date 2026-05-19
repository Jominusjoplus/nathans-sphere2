export default function Home() {
  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'Cormorant, serif', fontSize: 72, fontWeight: 300, color: 'var(--dark)', letterSpacing: '0.04em' }}>
          Nathan's Sphere
        </p>
        <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 8 }}>
          Fashion House · Est. Now
        </p>
      </div>
    </main>
  );
}