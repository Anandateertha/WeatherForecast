import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route exact path="/" element={<Weather setProgress={setProgress} key="bengaluru" city="bengaluru" />} />
          <Route exact path="/ballari" element={<Weather setProgress={setProgress} key="ballari" city="ballari" />} />
          <Route exact path="/delhi" element={<Weather setProgress={setProgress} key="delhi" city="delhi" />} />
          <Route exact path="/hyderabad" element={<Weather setProgress={setProgress} key="hyderabad" city="hyderabad" />} />
          <Route exact path="/mumbai" element={<Weather setProgress={setProgress} key="mumbai" city="mumbai" />} />
          <Route exact path="/chennai" element={<Weather setProgress={setProgress} key="chennai" city="chennai" />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
