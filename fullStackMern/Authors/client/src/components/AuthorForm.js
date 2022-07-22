import { useState } from 'react';
const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const { submitHandler, buttonText, oldAuthor } = props;
    const [author, setAuthor] = useState(
        oldAuthor || {
            name: ""
        },
    );
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    //handler when the form is submitted
    const handleSubmit = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        submitHandler(author, setErrors);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Name</label><br />
                <input type="text" name="name" value={author.name}
                    onChange={handleChange} />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
            </p>
            <button>{buttonText}</button>
        </form>
    )
}
export default AuthorForm;

