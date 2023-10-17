import React, { useState } from 'react';
import { loginUser } from '../request/axiosRequest';
import { useNavigate } from "react-router-dom";

function SignInUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const handleSignIn = (e) => {
        e.preventDefault();
        loginUser(email, password, rememberMe, navigate)
            .then((response) => {
                console.log(response);
                console.log("Authentification réussi ")
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit" onClick={handleSignIn}>
                    Sign In
                </button>
            </form>
        </section>
    );
}

export default SignInUser;
