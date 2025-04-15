// src/App.tsx
import React from 'react';
import Banner from './components/Banner';
import BannerForm from './components/BannerForm';
import { BannerProvider } from './context/BannerContext';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BannerProvider>
        <Banner />
        <div className="container">
          <BannerForm />
        </div>
      </BannerProvider>
    </div>
  );
};

export default App;
