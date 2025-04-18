import About from '@/components/About/About';
import Company from '@/components/Company/Company';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';

function HomePage() {
  return (
    <>
      <Hero />
      <Company />
      <Services />
      <About />
    </>
  );
}

export default HomePage;
