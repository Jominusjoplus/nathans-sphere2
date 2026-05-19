import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';

export default function Home() {
  return (
    <main style={{ background: 'var(--white)' }}>
      <Nav />
      <Hero />
      <Manifesto />
    </main>
  );
}