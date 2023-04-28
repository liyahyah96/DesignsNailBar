import { Outlet, NavLink, Link, ScrollRestoration } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function ServicesMenu() {
    return (
        <div className="services-page">
            <Nav />
            <div className="services-content">
                <div className="nav-services">
                    <NavLink to={`manicure`} style={ ({isActive}) => {
                        return {
                            color: isActive ? "var(--primary-color)" : ""
                        };
                    }} > Manicure </NavLink>
                    <NavLink to={`pedicure`} style={ ({isActive}) => {
                        return {
                            color: isActive ? "var(--primary-color)" : ""
                        };
                    }} >Pedicure</NavLink>
                    <NavLink to={`wax`} style={ ({isActive}) => {
                        return {
                            color: isActive ? "var(--primary-color)" : ""
                        };
                    }} >Wax</NavLink>
                    <NavLink to={`more`} style={ ({isActive}) => {
                        return {
                            color: isActive ? "var(--primary-color)" : ""
                        };
                    }} >& More</NavLink>
                </div>
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ServicesMenu