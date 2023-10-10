import Nav from "../component/Nav"
import Footer from '../component/Footer'
import SignInUser from "../component/Signinuser"

function Signin() {
    return (
        <div>
            <header >
                < Nav />
            </header>
            <main>
                < SignInUser />
            </main>

            <Footer />
        </div>
    )
}
export default Signin