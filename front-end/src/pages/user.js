import Nav from "../component/Nav"
import Footer from '../component/Footer'
import TitleUser from "../component/Titleuser"
import Account from "../component/Account"
function User() {
    return (
        <div>
            <header >
                < Nav />
            </header>
            <main className="main bg-dark">
                < TitleUser />
                < Account />
            </main>

            <Footer />
        </div>
    )
}
export default User