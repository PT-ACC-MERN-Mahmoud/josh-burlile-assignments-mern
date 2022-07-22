import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import DeleteProduct from './DeleteProduct';

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (!state) {
            console.log('API???', state);
            axios
                .get(`http://localhost:8000/api/products/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data);
                })
                .catch((err) => console.log('GET PRODUCT BY ID ERROR', err));
            } else {
            console.log('STATE', state);
            setProduct(state);
            }
        }, [id]);
        const handleDelete = () => {
            navigate("/");
        };
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteProduct id={product._id} handleDelete={handleDelete} />
        </div>
    );
};
export default Product;

