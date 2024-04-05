import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/header';
import Footer from './components/footer';
import ScrollTopButton from './components/scrollTopButton';

import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';
import ResidentialPage from './pages/residentialPage';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import AccessibilityPage from './pages/accessibilityPage';
import FaqPage from './pages/faqPage';
import PortfolioPage from './pages/portfolioPage';
import CommercialPage from './pages/commercialPage';

import ScrollToTop from './utils/scrollToTop';
import ServicesPage from './pages/servicesPage';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';
import ProtectedRoute from './utils/hoc/protectedRoute';

const App = () => {
  const [myRef, setMyRef] = useState();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Header setMyRef={setMyRef} />
      <div className="myBody">
        <Routes>
          <Route path={'/'} element={<HomePage myRef={myRef} />} />
          <Route path={'/residential'} element={<ResidentialPage />} />
          <Route path={'/commercial'} element={<CommercialPage />} />
          <Route path={'/portfolio'} element={<PortfolioPage />} />
          <Route path={'/services'} element={<ServicesPage />} />
          <Route path={'/contact-us'} element={<ContactUsPage />} />

          <Route path={'/faq'} element={<FaqPage />} />
          <Route path={'/accessibility'} element={<AccessibilityPage />} />
          <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />

          <Route path={'/login'} element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default App;
