import { useState } from 'react';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const { submitHandler, buttonText, oldProduct} = props;
    const [product, setProduct] = useState(
        oldProduct || {
            title: "",
            price: "",
            description: "",
        },
    );
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    
    //handler when the form is submitted
    const handleSubmit = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        submitHandler(product, setErrors);
    }
    return (
            <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label><br/>
                {errors.title && <span className="text-danger">{errors.title.message}</span>}
                <input type="text" name="title" value={product.title} 
                onChange = {handleChange}/>
            </p>
            <p>
                <label>Price</label><br/>
                {errors.price && <span className="text-danger">{errors.price.message}</span>}
                <input type="number" name="price" value={product.price}
                onChange = {handleChange}/>
            </p>
            <p>
                <label>Description</label><br/>
                {errors.description && <span className="text-danger">{errors.description.message}</span>}
                <input type="text" name="description" value={product.description}
                onChange = {handleChange}/>
            </p>
            <button>{buttonText}</button>
            </form>
    )
}
export default ProductForm;

