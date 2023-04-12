import FadeInSection from './FadeInSectionEffect'
import spaSetImage from '../assets/spa-composition-with-care-items-light-wall.jpg'

export default function Contact() {
    return (
        <FadeInSection>
            <section id="contact" className="contact">
                <img src={spaSetImage} alt="spa care image" />
                <h3>Hope to see you soon</h3>
                <div className="contact-cards">
                    <div className="contact-card opening-hours">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>
                        <div className="contact-details time">
                            <p>Mon-Fri:</p>
                            <p>10AM - 7PM</p>
                            <p>Saturday:</p>
                            <p>9:30AM - 7PM</p>
                            <p>Sunday:</p>
                            <p>12PM - 5:30PM</p>
                        </div>
                    </div>
                    <div className="contact-card phone">
                        <span class="material-symbols-outlined">
                        phone_iphone
                        </span>
                        <div className="contact-details">
                            <p> Call to book your appointment </p>
                            <a href="tel:+8174199175">(817) 419-9175</a>
                        </div>
                    </div>
                    <div className="contact-card address">
                        <span class="material-symbols-outlined">
                        location_on
                        </span>
                        <div className="contact-details">
                            <p>1827 SW Green Oaks Blvd #109, Arlington, TX 76017</p>
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>
    )
}
