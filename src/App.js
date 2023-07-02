import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  setProgress = async (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          <Routes>
            <Route exact path="/" element={<Weather setProgress={this.setProgress} key="bengaluru" city="bengaluru" />}/>
            <Route exact path="/ballari" element={<Weather setProgress={this.setProgress} key="ballari" city="ballari" />}/>
            <Route exact path="/delhi" element={<Weather setProgress={this.setProgress} key="delhi" city="delhi" />}/>
            <Route exact path="/hyderabad" element={<Weather setProgress={this.setProgress} key="hyderabad" city="hyderabad" />}/>
            <Route exact path="/mumbai" element={<Weather setProgress={this.setProgress} key="mumbai" city="mumbai" />}/>
            <Route exact path="/chennai" element={<Weather setProgress={this.setProgress} key="chennai" city="chennai" />}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
