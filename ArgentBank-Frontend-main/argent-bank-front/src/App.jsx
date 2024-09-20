import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .App {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} userName={userName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
            <Route path="/profile" element={<Profile userName={userName} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;