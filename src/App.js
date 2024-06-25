import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './common/MainNav';
import MainBanner from './common/MainBanner';
import MainFooter from './common/MainFooter';
import Services from './common/Services';
import MainContent from './common/MainContent';
import ServicesDetail from './common/ServicesDetail';
import TopBar from './common/TopBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <MainNav />
        <main id="main-content">

          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/servicesDetail" element={<ServicesDetail />} />
          </Routes>

        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
