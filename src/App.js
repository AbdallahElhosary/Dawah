import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Audio from './pages/Audio';
import QuranPage from './pages/QuranPage';
import RecitersPage from './pages/RecitersPage';
import ReciterSurahsPage from './pages/ReciterSurahsPage';
import TitleDate from './components/TitleDate/TitleDate';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <TitleDate />
        <Header />
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/quran" element={<QuranPage />} />
            <Route path="/reciters" element={<RecitersPage />} />
            <Route path="/reciter/:reciterId" element={<ReciterSurahsPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

