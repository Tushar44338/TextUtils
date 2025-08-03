import './App.css';
import React, { useState } from 'react';
import Navbar from './properties/Navbar';
import TextForm from './properties/TextForm';
import Alert from './properties/Alert';
import About from './properties/About';
 import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b263b';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Editor" home="home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} title="Enter Text Here" />} />
          </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;
