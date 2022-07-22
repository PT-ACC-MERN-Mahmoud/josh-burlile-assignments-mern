import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res)=> {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
        }, []);
        
    const handleDelete = (id) => {
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(newProducts);
    };
    return (
        <div>
            {products.map((product)=>(
                    <div key={product._id}> 
                        <Link to={`/products/${product._id}`}> {product.title}</Link>
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>
                        <DeleteProduct id={product._id} handleDelete={handleDelete} />
                    </div> 
            ))}
        </div>
    );
};
export default ProductList;

