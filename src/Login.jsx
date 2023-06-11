import React, { useState } from "react";
import Navbar from "./Navbar";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleClick =() => {
        Navigate("/User")
    }


    return (
        <div>
        <Navbar/>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here.</button>
        </div>
        <button className="link-btn" onClick={handleClick}>Log In</button>   
        </div>
    )
} 