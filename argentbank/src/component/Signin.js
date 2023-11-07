import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginSuccess, LoginFail } from "../actions/user.action";
import axios from "axios";


function SignInUser() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const signin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3001/api/v1/user/login',
                {
                    email: email,
                    password: password,
                }
            );

            if (response.status === 200) {
                const token = response.data.body.token;
                if (remember) {
                    localStorage.setItem("token", token)
                } else {
                    sessionStorage.setItem('token', token)
                }
                console.log('Authentification réussie');
                navigate('/user-account');
                dispatch(LoginSuccess());
            } else {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                console.log('Échec d\'authentification');
                setError("Échec d'authentification. Veuillez vérifier vos informations.");
                dispatch(LoginFail("Erreur d'authentification"));
            }
        } catch (error) {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            console.error('Erreur lors de l\'authentification', error);
            setError("Échec d'authentification. Veuillez vérifier vos informations.");
            dispatch(LoginFail("Erreur d'authentification"));
        }
    };
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={signin}>
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button className="sign-in-button" type="submit" >
                    Sign In
                </button>

            </form>
        </section>
    );
}

export default SignInUser;
