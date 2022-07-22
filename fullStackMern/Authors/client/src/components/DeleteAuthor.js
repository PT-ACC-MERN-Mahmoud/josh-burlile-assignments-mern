import axios from 'axios';
const DeleteAuthor = (props) => {
    const { id, handleDelete } = props;
    const deleteAuthor = () => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                handleDelete(id);
            })
            .catch((err) => console.log(err));
    };
    return (
        <button onClick={deleteAuthor}>Delete Author</button>
    )
}
export default DeleteAuthor;
