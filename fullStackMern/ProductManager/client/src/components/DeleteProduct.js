import axios from 'axios';
const DeleteProduct = (props) => {
    const { id, handleDelete } = props;
    const deleteProduct = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                handleDelete(id);
            })
            .catch((err) => console.log(err));
    };
    return (
        <button onClick={deleteProduct}>Delete Product</button>
    )
}
export default DeleteProduct;

