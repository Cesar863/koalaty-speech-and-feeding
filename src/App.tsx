import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientWrapper from '@/ClientWrapper';
import HomePage from '@/components/HomePage/HomePage';
import { Navbar } from '@/components/Navbar/Navbar';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';

function App() {
  return (
    <BrowserRouter>
      <ClientWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
        </Routes>
      </ClientWrapper>
    </BrowserRouter>
  );
}

export default App;
