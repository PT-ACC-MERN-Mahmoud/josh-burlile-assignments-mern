import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';
const NewAuthor = () => {
    const navigate = useNavigate();
    const submitHandler = (author, setErrors) => {
        axios
            .post('http://localhost:8000/api/authors', author)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => setErrors(err.response.data.errors));
    };

    return <AuthorForm submitHandler={submitHandler} buttonText="Add Author" />;
};

export default NewAuthor;