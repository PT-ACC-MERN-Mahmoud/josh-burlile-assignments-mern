import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {products, setProducts} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
        console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            {
                products.map((product, index)=>{
                return (
                    <div key={index}> 
                     {/* Like our JSX return, map requires ONE parent element, so let's refactor. */}
                        <p>{product.title}</p> 
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}> {product.title}'s Page! </Link>
                    </div> 
                )})
            }
        </div>
    )
}
export default ProductList;

