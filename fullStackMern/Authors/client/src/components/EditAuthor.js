import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import AuthorForm from './AuthorForm';

const UpdateAuthor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const [oldAuthor, setOldAuthor] = useState(null);
    
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        if (!state) {
            console.log('HELLO API???', state);
            axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setOldAuthor(res.data);
            })
            .catch((err) => console.log('GET AUTHOR BY ID ERROR', err));
        } else {
            console.log('HELLO STATE?', state);
            setOldAuthor(state);
        }
    }, [id]);

    const submitHandler = (author, setErrors) => {
        console.log(author);
        axios
            .put(`http://localhost:8000/api/authors/${id}`, author)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => { 
                console.log(err.response.data.err.errors)
                setErrors(err.response.data.err.errors)});
        };
    
        return (
        oldAuthor && <AuthorForm submitHandler={submitHandler} 
        buttonText="Edit Author" oldAuthor={oldAuthor} />
        );
    };
export default UpdateAuthor;

