import Feature from '../component/Feature';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Nav from '../component/Nav';
import '../designs/css/main.css';

function Home() {
    return (
        <div >
            <header >
                < Nav />
            </header>
            <main>
                <Hero />
                <Feature />
            </main>
            <Footer />
        </div>
    );
}

export default Home;