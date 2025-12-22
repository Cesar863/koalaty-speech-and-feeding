import FullScreenSection from '@/app/FullScreenSection';
import About from '@/components/About/About';
import Company from '@/components/Company/Company';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';

function HomePage() {
  return (
    <>
      <FullScreenSection id="heroLanding">
        <Hero />
      </FullScreenSection>
      <FullScreenSection id="company">
        <Company />
      </FullScreenSection>
      <FullScreenSection id="services">
        <Services />
      </FullScreenSection>
      <FullScreenSection id="about">
        <About />
      </FullScreenSection>
      <Footer />
    </>
  );
}

export default HomePage;
