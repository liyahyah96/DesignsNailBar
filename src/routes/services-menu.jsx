import { Outlet, Link, ScrollRestoration } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import monsteraImg from '../assets/tropical-green-leaves-background.jpg'

function ServicesMenu() {
    return (
        <div className="services-page">
            <Nav />
            <div className="services-content">
                <nav className="nav-tabs">
                    <Link to={`manicure`}>Manicure</Link>
                    <Link to={`pedicure`}>Pedicure</Link>
                    <Link to={`wax`}>Wax</Link>
                    <Link to={`more`}>& More</Link>
                </nav>
                <img src={monsteraImg} alt="monstera img" />
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ServicesMenu