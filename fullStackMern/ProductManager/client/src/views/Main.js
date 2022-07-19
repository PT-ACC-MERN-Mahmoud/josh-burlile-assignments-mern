import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <div>
    	{ /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;
