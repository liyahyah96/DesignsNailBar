import { Link } from 'react-router-dom'
import { useState } from 'react'
import FadeInSection from './FadeInSectionEffect'
import coverImage from '../assets/cover-art.png'
import monsteraImage from '../assets/tropical-green-leaves-background.jpg'

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <FadeInSection>
            <nav className="nav-mobile">
                <button onClick={ () => {setIsNavExpanded(!isNavExpanded)} } className="nav-mobile-button">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div className={ isNavExpanded===true? "nav-mobile-menu active" : "nav-mobile-menu" }>
                    <Link to={`services-menu`}>Services</Link>
                    <a href="#contact">Contact</a>
                    <Link to={`gallery`}>Gallery</Link>
                </div>
            </nav>
            <header>
                <div className="cover-img">
                    <img src={coverImage} alt="cover-image"/>
                </div>

                <section className="home">
                    <div className="nav-container">
                        <img src={monsteraImage} alt="tropical plant image" />
                        <nav className="nav-bar">
                            <Link to={`services-menu`}>Services</Link>
                            <a href="#contact">Contact</a>
                            <Link to={`gallery`}>Gallery</Link>
                        </nav>
                    </div>
                    <div className="title-container">
                        <h1> Designs Nails Bar </h1>
                    </div>
                    <div className="subtite-container">
                        <h2>You inspire our designs, <br/> we draw out your beauty. </h2>
                    </div>
                </section>
            </header>
        </FadeInSection>
    )
}