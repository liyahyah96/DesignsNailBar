import { Outlet, Link, ScrollRestoration } from 'react-router-dom'
import './services-menu.css'
import Footer from '../sections/Footer'

function ServicesMenu() {
    return (
        <div id="services-menu">
            <div className="services-header">
                <img src='../assets/tropical-green-leaves-background.jpg' />
                <Link to="/"><h1> Designs Nails Bar </h1></Link>
            </div>
            <nav className="nav-tabs">
                <Link to={`manicure`}>Manicure</Link>
                <Link to={`pedicure`}>Pedicure</Link>
                <Link to={`wax`}>Wax</Link>
                <Link to={`more`}>& More</Link>
            </nav>
            <Outlet />
            <ScrollRestoration />
            <Footer></Footer>
        </div>
    )
}

export default ServicesMenu