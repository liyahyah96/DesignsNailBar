import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

    return (
        <header>
            <div className={ isPortrait ? "cover-img-portrait" : "cover-img"}>
            </div>
            <div className={ isPortrait ? "header-titles-portrait" : "header-titles"}>
                <h1> Designs Nails Bar </h1>
                <h2>You inspire our designs, <br/> we draw out your beauty. </h2>
                <div className='discount-cta'>
                    <span>4th of July Special</span>
                    <span>15% OFF ANY SERVICE $40+</span>
                    <a href='#contact'>Call to book your appointment!</a>
                </div>
            </div>
        </header>
    )
}