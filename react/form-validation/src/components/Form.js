import React, { useState, useReducer } from 'react';
import { v4 } from 'uuid'; // Generates unique random numbers

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // default value before state is set

    const createUser = (e) => {
        e.preventDefault();

        // Using shorthand ES6 below
        const newUser = { firstName, lastName, email };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");

        // The below value will be set to true when state is updated
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form :)"
        } else {
            return "Welcome to the site! Please submit the below form."
        }
    }

    return (
        <div class="col-6 offset-3">
            <form class="card border-primary text-primary" onSubmit={createUser}>
                <h3>{ formMessage() }</h3>
                <div class="input-group mb-3">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (<p>First Name must be at least 2 characters</p> 
                ) : null}
                <div class="input-group mb-3">

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (<p>Last Name must be at least 2 characters</p> 
                ) : null}
                <div class="input-group mb-3">

                    <label htmlFor="email">Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5 && email.length > 0 ? (<p>Email must be at least 5 characters</p> 
                ) : null}
                <input class="align-self-center" type="submit" value="Create User" />
            </form>
            <hr></hr>
            <div>
                <h3>Here's What You Put in the Form:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Form;