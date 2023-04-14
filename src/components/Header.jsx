import { Link } from 'react-router-dom'
import { useState } from 'react'
import FadeInSection from './FadeInSectionEffect'
import coverImage from '../assets/cover-art.png'
import monsteraImage from '../assets/tropical-green-leaves-background.jpg'

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <FadeInSection>
            <header>
                <section className="intro">
                <div className="cover-img">
                    <img src={coverImage} alt="cover-image"/>
                </div>
                <div className="header-titles">
                    <h1> Designs Nails Bar </h1>
                    <h2>You inspire our designs, <br/> we draw out your beauty. </h2>
                </div>
                <img src={monsteraImage} alt="tropical plant image" />
                </section>
            </header>
        </FadeInSection>
    )
}