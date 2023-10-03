import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './global.scss';
import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import ScrollToTop from './utils/scrollToTop';
import Footer from './components/footer';
import ResidentialPage from './pages/residentialPage';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import AccessabilityPage from './pages/accessabilityPage';
import BlogPage from './pages/blogPage';
import FaqPage from './pages/faqPage';
import PortfolioPage from './pages/portfolioPage';
import CommercialPage from './pages/commercialPage';

const App = () => {
  const [myRef, setMyRef] = useState();

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
          <Route path={'/contact-us'} element={<ContactUsPage />} />

          <Route path={'/faq'} element={<FaqPage />} />
          <Route path={'/blog'} element={<BlogPage />} />
          <Route path={'/accessibility'} element={<AccessabilityPage />} />
          <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
