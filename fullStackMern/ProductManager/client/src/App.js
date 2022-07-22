import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Product from './components/Product';
import NewProduct from './components/NewProduct';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductList/>} path="/" />
          <Route element={<NewProduct/>} path="/new" />
          <Route element={<Product/>} path="/products/:id" />
          <Route element={<UpdateProduct/>} path="/products/edit/:id"/>
        {/* adding the default makes this the default path */}
        </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;

