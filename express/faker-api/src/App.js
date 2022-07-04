import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="api/users/new" element={<Object/>}/>
        <Route path="api/companies/new" element={<Object/>}/>
        <Route path="api/user/company" element={<Object/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
