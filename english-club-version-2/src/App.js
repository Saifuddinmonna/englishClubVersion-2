import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Vocabulary from './pages/Vocabulary';

function App() {
  return (
    <Router>
      <div className="container mother-div">
        <header className="row mb-5 container clearfix">
          <Navbar />
        </header>

        <main className="row container d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            {/* Add more routes as we create more pages */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
