'use client';

const ITEMS = [
  {
    season: 'SS 2025',
    name: 'Collection One',
    pieces: '— Pieces',
    desc: 'Your collection description goes here. Describe the mood, the materials, the inspiration behind this season.',
  },
  {
    season: 'FW 2024',
    name: 'Collection Two',
    pieces: '— Pieces',
    desc: 'A second collection. Each entry tells the story of a season — the creative direction, the palette, the purpose.',
  },
  {
    season: 'SS 2024',
    name: 'Collection Three',
    pieces: '— Pieces',
    desc: 'Your archive grows with every collection. Each one a chapter in the Nathan\'s Sphere story.',
  },
];

export default function Collections() {
  return (
    <section id="collections" style={{
      padding: '120px 48px',
      background: 'var(--white)',
      borderTop: '0.5px solid var(--stone)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              Archive
            </p>
            <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: 'var(--dark)', lineHeight: 1.1 }}>
              Collections
            </h2>
          </div>
          <button
            style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--warm-gray)', background: 'none',
              border: '0.5px solid var(--stone)', padding: '12px 28px', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--dark)';
              e.currentTarget.style.color = 'var(--dark)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--stone)';
              e.currentTarget.style.color = 'var(--warm-gray)';
            }}
          >
            Request Lookbook
          </button>
        </div>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5px', background: 'var(--stone)' }}>
          {ITEMS.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'var(--white)',
                display: 'grid', gridTemplateColumns: '260px 1fr 32px',
                gap: 48, alignItems: 'center', padding: '40px 0',
                cursor: 'pointer', transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--off-white)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
            >
              {/* Image placeholder */}
              <div style={{
                width: 260, height: 170,
                background: 'var(--stone)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {/* Replace later with:
                    <Image src="/images/collection-01.jpg" width={260} height={170} style={{ objectFit: 'cover' }} alt={c.name} />
                */}
                <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>
                  Image
                </p>
              </div>

              {/* Info */}
              <div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {c.season}
                  </span>
                  <span style={{ width: 24, height: '0.5px', background: 'var(--stone)', display: 'block' }} />
                  <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>
                    {c.pieces}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: 32, fontWeight: 400, color: 'var(--dark)', marginBottom: 12 }}>
                  {c.name}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--warm-gray)', fontWeight: 300, maxWidth: 480 }}>
                  {c.desc}
                </p>
              </div>

              {/* Arrow */}
              <div style={{ fontSize: 20, color: 'var(--stone)' }}>→</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}