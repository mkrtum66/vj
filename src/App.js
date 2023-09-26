import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/contact-us'} element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
