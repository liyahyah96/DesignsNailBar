import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/apple-touch-icon.png'

export default function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect( () => {
        var timer = null;
        window.addEventListener('scroll', () => {
        if(timer !== null) {
            clearTimeout(timer);     
            setIsScrolling(true);   
        }
        timer = setTimeout(() => {
            setIsScrolling(false);
            }, 300);
        }, false);
    })

    return (
        <nav className={ isScrolling? "main-nav ghost" : "main-nav" } >
            <button onClick={ () => {setIsNavExpanded(!isNavExpanded)} } className="nav-button">
                { isNavExpanded? 
                    <span class="material-symbols-outlined"> chevron_left </span> : 
                    <span className="material-symbols-outlined">menu</span>
                }
            </button>
            <div className={ isNavExpanded? "nav-links active" : "nav-links" }>
                <Link to={`/`} className="nav-logo"><img src={logo} /></Link>
                <Link to={`/services-menu/manicure`}>Services</Link>
                <Link to={`/#contact`}>Contact</Link>
                <Link to={`/gallery`}>Gallery</Link>
                <div></div>
            </div>
        </nav>
    )
}