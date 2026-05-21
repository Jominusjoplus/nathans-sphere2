export default function Manifesto() {
  return (
    <section className="section-wrapper bg-white border-top">
      <div className="section-container manifesto-grid">

        {/* Left — label */}
        <div>
          <p style={{
            fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
          }}>
            The Philosophy
          </p>
          <div style={{ width: 32, height: '0.5px', background: 'var(--accent)', marginBottom: 24 }} />
          <p style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--warm-gray)', fontWeight: 300 }}>
            Founded in Nigeria.<br />Designed for the world.
          </p>
        </div>

        {/* Right — content */}
        <div>
          <blockquote style={{
            fontFamily: 'Cormorant, serif',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 300, lineHeight: 1.2,
            color: 'var(--dark)', fontStyle: 'italic',
            marginBottom: 48,
          }}>
            &quot;We don&apos;t follow seasons. We set them. Nathan&apos;s Sphere is a world — built on intention, craft, and the quiet confidence of knowing exactly who you are.&quot;
          </blockquote>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {[
              {
                title: 'The Vision',
                body: "A Nigerian luxury house with global authority. Nathan's Sphere is proof that the world's finest fashion can originate from Lagos and resonate from London to Tokyo.",
              },
              {
                title: 'The Craft',
                body: "Every garment, accessory, and lifestyle object within our universe is held to one standard: extraordinary. We move slowly, purposefully, and without compromise.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 style={{
                  fontFamily: 'Cormorant, serif', fontSize: 20,
                  fontWeight: 400, color: 'var(--dark)', marginBottom: 12,
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--warm-gray)', fontWeight: 300 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}