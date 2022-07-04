import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import TestRoutes from './components/TestRoutes';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:input" element={<TestRoutes />}/>
            <Route path="/:input/:color/:bgColor" element={<TestRoutes />}/>
          </Routes>
      </div>
      </BrowserRouter>

    
  );
}

export default App;
