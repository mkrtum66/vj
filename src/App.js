import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="myBody">
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/contact-us'} element={<ContactUsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
