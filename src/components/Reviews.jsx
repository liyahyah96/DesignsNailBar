import React from 'react'
import FadeInSection from './FadeInSectionEffect'
import Carousel from '../components/Carousel'

function Reviews() {
    return (
        <FadeInSection>
            <section className="testimonies">
                <h3> Word on the street </h3>
                <Carousel />
            </section>
        </FadeInSection>
    )
}

export default Reviews;