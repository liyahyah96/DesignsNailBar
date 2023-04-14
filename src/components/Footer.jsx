import FadeInSection from './FadeInSectionEffect'
import fbIcon from '../assets/facebook.png'
import igIcon from '../assets/instagram.png'

function Footer() {
    return(
        // <FadeInSection>
            <footer className="footer">
                <div className="social-links">
                    <a href="https://www.facebook.com/designsnailsbar"><img src={fbIcon} alt="fb icon" /></a>
                    <a href="https://www.instagram.com/designsnailsbar"><img src={igIcon} alt="instagram icon" /></a>
                </div>
                <span>All Rights Reserved Designs Nail Bar</span>
            </footer>
        // </FadeInSection>
    )
}

export default Footer