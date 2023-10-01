import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/contact-us'} element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
