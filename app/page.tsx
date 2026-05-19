import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import SubBrands from '@/components/SubBrands';
import Collections from '@/components/Collections';

export default function Home() {
  return (
    <main style={{ background: 'var(--white)' }}>
      <Nav />
      <Hero />
      <Manifesto />
      <SubBrands />
      <Collections />
    </main>
  );
}