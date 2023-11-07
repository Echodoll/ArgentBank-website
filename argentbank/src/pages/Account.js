import AccountPage from "../component/AccountPage"
import AccountUser from "../component/AccountUser"
import AccountHeader from "../component/AccountHeader"
import Footer from "../component/Footer"
import Nav from "../component/Nav"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

function Account() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
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
                    <AccountUser />
                </main>
                <Footer />
            </div>
        )
    } else {
        return null;
    }
}
export default Account