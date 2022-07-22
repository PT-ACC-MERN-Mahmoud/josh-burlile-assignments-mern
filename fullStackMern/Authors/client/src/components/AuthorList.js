import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import DeleteAuthor from './DeleteAuthor';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const newAuthors = authors.filter((author) => author._id !== id);
        setAuthors(newAuthors);
    };
    return (
        <div>
            <Header />
            
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="fw-bold">Author Name</th>
                                <th className="fw-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {authors.map((author) => (
                            <tr key={author._id}>
                                <td>
                                    <Link to={`/authors/${author._id}`}> {author.name}</Link>
                                </td>
                                <td>
                                    <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                                    <span> | </span>
                                    <DeleteAuthor id={author._id} handleDelete={handleDelete} />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            
        </div>
    );
};
export default AuthorList;

