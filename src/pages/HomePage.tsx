import About from '@/components/About/About';
import Company from '@/components/Company/Company';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import { SnackbarProvider } from '@/components/Snackbar/SnackbarContext';

function HomePage() {
  return (
    <>
      <SnackbarProvider>
        <Hero />
        <Company />
        <Services />
        <About />
      </SnackbarProvider>
    </>
  );
}

export default HomePage;
