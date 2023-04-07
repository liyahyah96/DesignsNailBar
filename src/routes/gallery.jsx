import { Link } from 'react-router-dom'
import './gallery.css'
import Footer from '../sections/Footer'

function Gallery() {
    return (
        <div id="gallery">
            <Link to={`/`}>{`<`} Go Back</Link> 
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