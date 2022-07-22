import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
const NewProduct = () => {
  const navigate = useNavigate();
  const submitHandler = (product, setErrors) => {
    axios
      .post('http://localhost:8000/api/products', product)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return <ProductForm submitHandler={submitHandler} buttonText="Add Product" />;
};

export default NewProduct;
