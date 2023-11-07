import { Link } from "react-router-dom"
import "../designs/css/main.css"
import Logo from "../designs/img/argentBankLogo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../actions/user.action";
import { fetchUser } from "../actions/user.action";
import { useEffect } from "react";

function Nav() {
    const tokenLocalStorage = localStorage.getItem('token');
    const tokenSessionStorage = sessionStorage.getItem('token');
    const token = tokenLocalStorage || tokenSessionStorage;
    const userProfile = useSelector((state) => state.userReducer.userProfile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const SignOut = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    };

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);


    if (token) {
        return (
            <nav className='main-nav'>
                <Link to='/' className='main-nav-logo'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>
                <div className='navbar_loginSuccess'>
                    <Link to='/user-account' className='main-nav-item'>
                        <i className='fa fa-user-circle'></i>
                        {userProfile.userName}
                    </Link>
                    <Link to='/' className='main-nav-item' onClick={SignOut}>
                        <i className='fa fa-sign-out'></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Nav;