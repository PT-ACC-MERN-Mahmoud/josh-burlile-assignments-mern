import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId)); //We could also write this in our PersonList component
    }
    
    return (
        <div>
    	{ /* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;
