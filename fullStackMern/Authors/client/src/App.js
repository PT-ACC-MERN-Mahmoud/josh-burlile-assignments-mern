import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import EditAuthor from './components/EditAuthor';
import Author from './components/Author';
import NewAuthor from './components/NewAuthor';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList/>} path="/" />
          <Route element={<NewAuthor/>} path="/new" />
          <Route element={<Author/>} path="/authors/:id" />
          <Route element={<EditAuthor/>} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;
