import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" /> 
          <Route element={<Detail/>} path="/products/:id" />
        {/* adding the default makes this the default path */}
        </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;

