import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form style={{ marginTop: "200px", color: 'dodgerblue' }} >
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassord">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </form>
            <div style={{ color: 'dodgerblue' }}>
                <h3 style={{ textAlign: "center", }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>
                    {firstName}
                </p>
                <p>
                    <label>Last Name: </label>
                    {lastName}
                </p>
                <p>
                    <label>Email: </label>
                    {email}
                </p>
                <p>
                    <label>Password: </label>
                    {password}
                </p>
                <p>
                    <label>Confirm Password: </label>
                    {confirmPassword}
                </p>
            </div>
        </div>
    );
};

export default Form;
