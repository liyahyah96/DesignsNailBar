import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSectionEffect'

function Services() {
    return (
        <FadeInSection>
            <section id="services" className="services">
                <div className="choose-us">
                    <h3> Why clients choose us </h3>
                    <p>
                        We aren't mere nail technicians — we are nail artists who are dedicated to
                        making you feel happy and beautiful. It's important to us that you 
                        feel confident from your skin to your nails.
                    </p>
                </div>
                <div className="offer-services">
                    <img src="\assets\female-bare-feet-hands-manicure-pedicure-concept.jpg"/>
                    <h3>Choose your treatment</h3>
                    <div className="services-grid">
                        <div id="manicure-card" className="card">
                            <Link to={`services-menu/manicure`} className="service-link">Manicure</Link>
                            <img className="service-img" src="/assets/mani-vector.png"/>
                        </div>
                        <div id="pedicure-card" className="card">
                            <Link to={`services-menu/pedicure`} className="service-link">Pedicure</Link>
                            <img className="service-img" src="/assets/pedi-vector.png"/>
                        </div>
                        <div id="wax-card" className="card">
                            <Link to={`services-menu/wax`} className="service-link">Wax</Link>
                            <img className="service-img" src="/assets/wax-vector.png"/>
                        </div>
                        <div id="more-card" className="card">
                            <Link to={`services-menu/more`} className="service-link">More</Link>
                            <img className="service-img" src="/assets/misc-vector.png"/>
                        </div>
                    </div>
                </div>   
            </section>
        </FadeInSection>
    )
}

export default Services