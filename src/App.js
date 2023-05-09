import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.js';
import Research from './Pages/Research.js';
import Writing from './Pages/Writing.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          console.log("Hello World");
          <Route path="/research" element={<Research title="Research" />} />
          <Route path="/writing" element={<Writing title="Writing"/>} />
          <Route exact path="/" element={<HomePage title="UPTACK"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
