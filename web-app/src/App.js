import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyBoard from './pages/MyBoard';
import Applications from './pages/Applications';
import Stats from './pages/Stats';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MyBoard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
