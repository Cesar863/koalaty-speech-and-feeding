import FullScreenSection from '@/app/FullScreenSection';
import About from '@/components/About/About';
import Company from '@/components/Company/Company';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import { SnackbarProvider } from '@/components/Snackbar/SnackbarContext';

function HomePage() {
  return (
    <>
      <SnackbarProvider>
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
      </SnackbarProvider>
    </>
  );
}

export default HomePage;
