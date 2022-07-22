import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ProductForm from './ProductForm';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const [oldProduct, setOldProduct] = useState(null);
    
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        if (!state) {
            console.log('HELLO API???', state);
            axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setOldProduct(res.data);
            })
            .catch((err) => console.log('GET PRODUCT BY ID ERROR', err));
        } else {
            console.log('HELLO STATE?', state);
            setOldProduct(state);
        }
    }, [id]);

    const submitHandler = (product, setErrors) => {
        console.log(product);
        axios
            .put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => setErrors(err.response.data.errors));
        };
    
        return (
        oldProduct && <ProductForm submitHandler={submitHandler} 
        buttonText="Edit Product" oldProduct={oldProduct} />
        );
    };
export default UpdateProduct;

