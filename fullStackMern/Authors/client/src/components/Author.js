import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import DeleteAuthor from './DeleteAuthor';

const Author = () => {
    const [author, setAuthor] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (!state) {
            console.log('API???', state);
            axios
                .get(`http://localhost:8000/api/authors/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setAuthor(res.data);
                })
                .catch((err) => console.log('GET Author BY ID ERROR', err));
            } else {
            console.log('STATE', state);
            setAuthor(state);
            }
        }, [id]);
        const handleDelete = () => {
            navigate("/");
        };
    return (
        <div>
            <p>Name: {author.name}</p>
            <DeleteAuthor id={author._id} handleDelete={handleDelete} />
        </div>
    );
};
export default Author;

