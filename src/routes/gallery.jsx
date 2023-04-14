import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Gallery() {
    return (
        <div id="gallery" className="gallery">
            <Nav />
            <article>
                <h2>Sorry! Gallery is still under construction.</h2>
                <h2>
                    If you want to be featured in the gallery, 
                    come visit our salon, choose your treatment and design, 
                    and ask to be our model.
                </h2>
            </article>
            <Footer />
        </div>
    )
}

export default Gallery