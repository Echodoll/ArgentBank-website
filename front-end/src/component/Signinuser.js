import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../request/axiosRequest';
import { useNavigate } from "react-router-dom";

function SignInUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const loginError = useSelector((state) => state.user.loginError);
    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password, navigate, rememberMe));
    };
    let errorMessage = null
    if (loginError) {
        errorMessage = <p style={{ color: 'red' }}>{loginError}</p>;
    }
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
                <button className="sign-in-button" type="submit" onSubmit={handleSignIn}>
                    Sign In
                </button>
                {errorMessage}
            </form>
        </section>
    );
}

export default SignInUser;
