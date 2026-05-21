'use client';
const BRANDS = [
  {
    id: '01',
    name: 'Featured Brand One',
    category: 'Apparel',
    desc: 'Your flagship clothing line. Seasonal collections for men and women who dress with intention.',
  },
  {
    id: '02',
    name: 'Featured Brand Two',
    category: 'Accessories',
    desc: 'Fine leather goods, jewellery, and statement pieces. Objects that outlast trends.',
  },
  {
    id: '03',
    name: 'Featured Brand Three',
    category: 'Lifestyle',
    desc: 'The Sphere extends beyond clothing — into the spaces you inhabit and the objects you choose.',
  },
  {
    id: '04',
    name: 'Featured Brand Four',
    category: 'Coming Soon',
    desc: "A new chapter in the Nathan's Sphere universe. Currently in development — watch this space.",
  },
];

export default function SubBrands() {
  return (
    <section id="subbrands" className="section-wrapper bg-off-white border-top">
      <div className="section-container">

        {/* Header */}
        <div className="section-header" style={{ marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              The Universe
            </p>
            <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: 'var(--dark)', lineHeight: 1.1 }}>
              Our Featured Brands
            </h2>
          </div>
          <p className="section-header-right" style={{ fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300 }}>
            Four worlds.<br />One vision.
          </p>
        </div>

        {/* Grid */}
        <div className="subbrands-grid">
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className="subbrand-card"
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--off-white)')}
            >
              {/* Top meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--warm-gray)', textTransform: 'uppercase' }}>
                  N°{b.id}
                </span>
                <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  {b.category}
                </span>
              </div>

              {/* Image placeholder */}
              <div className="subbrand-image">
                {/* Replace later with:
                    import Image from 'next/image';
                    <Image src="/images/brand-01.jpg" fill style={{ objectFit: 'cover' }} alt={b.name} />
                */}
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>
                  Brand Image
                </p>
              </div>

              {/* Info */}
              <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: 28, fontWeight: 400, color: 'var(--dark)', marginBottom: 12 }}>
                {b.name}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--mid)', fontWeight: 300, marginBottom: 24 }}>
                {b.desc}
              </p>

              {/* CTA */}
              <span style={{
                fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent)', borderBottom: '0.5px solid var(--stone)',
                paddingBottom: 2,
              }}>
                Discover →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}