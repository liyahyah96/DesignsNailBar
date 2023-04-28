import React, { useState, useEffect } from 'react'
import CarouselItem from "./CarouselItem"

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    let scrollInterval = null;
    let testimonies = [
        {   
            id: 1,
            name: "Laura Herrera from Google",
            photo: "src/assets/photo1.jpg",
            comment: "Best nails in town. Very nice employees and atmosphere is great."
        },
        {
            id: 2,
            name: "Elizabeth Fisher from Google",
            photo: "src/assets/photo1.jpg",
            comment: "Great service! Beautiful nails, just what I asked for! I very much recommend this salon."
        },
        {
            id: 3,
            name: "Taylar Williams from Google",
            photo: "src/assets/photo1.jpg",
            comment: "10 out of 10. They will take really good care of you!"
        }
    ]

    const updateIndex = (newIndex) => {
        if ( newIndex < 0 ) {
            newIndex = 0;
        } else if ( newIndex >= testimonies.length ) {
            newIndex = testimonies.length - 1;
        }

        setActiveIndex(newIndex);
    };

    useEffect( () => {
        scrollInterval = setTimeout( () => {
            setActiveIndex((activeIndex + 1) % testimonies.length);
        }, 5000);
        return () => clearTimeout(scrollInterval);
    });

    return (
        <article className="carousel">
            <div className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {testimonies.map( (item, index) => (
                    <CarouselItem item={item} index={index} />
                ))}
            </div>
            <div className="carousel-buttons">
                <button 
                    onClick={() => {
                    updateIndex((activeIndex - 1) % testimonies.length);
                    }} className="button-arrow" >
                        <span className="material-symbols-outlined">
                        arrow_back
                        </span>
                </button>
                <div className="carousel-indicators">
                {testimonies.map( (item, index) => (
                    <button 
                        onClick={() => {
                        updateIndex(index);
                        }}
                    className="button-indicator">
                        <span className={`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active" : "indicator-symbol"}`}>
                        radio_button_checked
                        </span>
                    </button>
                ))}

                </div>
                <button
                    onClick={() => {
                    updateIndex((activeIndex + 1) % testimonies.length);
                    }} className="button-arrow">
                        <span className="material-symbols-outlined">
                        arrow_forward
                        </span>
                </button>
            </div>
        </article>
    )
}