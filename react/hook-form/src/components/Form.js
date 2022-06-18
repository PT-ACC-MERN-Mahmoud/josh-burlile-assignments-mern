import React, { useState } from 'react';
import { v4 } from 'uuid'; // Generates unique random numbers

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        // Using shorthand ES6 below
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div class="col-6 offset-3">
            <form class="card border-primary text-primary" onSubmit={createUser}>
                <div class="input-group mb-3">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                </div>
                <div class="input-group mb-3">

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                </div>
                <div class="input-group mb-3">

                    <label htmlFor="email">Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div class="input-group mb-3">

                    <label htmlFor="password">Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div class="input-group mb-3">

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                </div>
                <input class="align-self-center" type="submit" value="Create User" />
            </form>
            <hr></hr>
            <div>
                <h3>Here's What You Put in the Form:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default Form;