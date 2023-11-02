import Banner from "../component/Banner"
import Feature from "../component/Feature"
import Footer from "../component/Footer"
import Nav from "../component/Nav"

function Homepage() {
    return (
        <div>
            <Nav />
            <main>
                <section>
                    <Banner />
                </section>
                <section>
                    <Feature />
                </section>
            </main>
            <Footer />
        </div>
    )

}

export default Homepage