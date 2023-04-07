import FadeInSection from './FadeInSectionEffect'

function Footer() {
    return(
        <FadeInSection>
            <section className="footer">
                <div className="social-links">
                    <a href="https://www.facebook.com/designsnailsbar"><img src="/assets/facebook.png"/></a>
                    <a href="#"><img src="/assets/instagram.png"/></a>
                </div>
                <span>All Rights Reserved Designs Nail Bar</span>
            </section>
        </FadeInSection>
    )
}

export default Footer