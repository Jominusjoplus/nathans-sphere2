import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import SubBrands from '@/components/SubBrands';
import Collections from '@/components/Collections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ background: 'var(--white)' }}>
      <Nav />
      <Hero />
      <Manifesto />
      <SubBrands />
      <Collections />
      <Contact />
      <Footer />
    </main>
  );
}