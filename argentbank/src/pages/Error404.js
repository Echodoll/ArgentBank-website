import Footer from "../component/Footer"
import Nav from "../component/Nav"
import { useNavigate } from "react-router-dom";
function Error404() {
    const navigate = useNavigate()
    const handleReturnButtonClick = () => {
        navigate('/');
    };
    return (
        <div>
            <Nav />
            <main className="error404">
                <h1 className="error404__title">
                    Error 404
                </h1>
                <h2> Oops, This Page Not found !</h2>
                <button className="error404__button" onClick={handleReturnButtonClick} >
                    Retour
                </button>

            </main>
            <Footer />
        </div>
    )
}
export default Error404 