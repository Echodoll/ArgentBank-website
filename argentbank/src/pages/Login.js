
import Footer from "../component/Footer"
import Nav from "../component/Nav"
import SignInUser from "../component/Signin"

function Login() {
    return (
        <div>
            <Nav />
            <main>
                <SignInUser />
            </main>
            <Footer />
        </div>
    )
}

export default Login 