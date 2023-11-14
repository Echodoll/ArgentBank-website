import AccountPage from "../component/AccountPage"
import AccountHeader from "../component/AccountHeader"
import Footer from "../component/Footer"
import Nav from "../component/Nav"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { useSelector } from "react-redux"

function Account() {
    const tokenFromLocalStorage = localStorage.getItem('token');
    const tokenFromRedux = useSelector((state) => state.userReducer.token);
    const token = tokenFromLocalStorage || tokenFromRedux;
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/Error404');
        }
    }, [token, navigate]);
    if (token) {
        return (
            <div>
                <Nav />
                <main className="bg-dark">
                    <AccountHeader />
                    <AccountPage />
                </main>
                <Footer />
            </div>
        )
    } else {
        return null;
    }
}
export default Account