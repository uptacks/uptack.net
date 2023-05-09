import React from 'react';
import './App.css';
import Header from './Header';
import ImageSection from './ImageSection';
import TextSection from './TextSection';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageSection />
      <TextSection />
      <Banner />
    </div>
  );
}

export default App;