import './App.css';
import React, { useState } from 'react';
import BoxGenerator from './components/BoxGenerator'
import DisplayBox from './components/DisplayBox'

function App() {
  
  const [ boxArray, setBoxArray ] = useState([]);

  return (
    <div className="App">
      <BoxGenerator boxArray={ boxArray } setBoxArray={ setBoxArray } />
      <DisplayBox boxArray={ boxArray } />
    </div>
  );
}

export default App;
