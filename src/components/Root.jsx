import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Services from './Services'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'
import { ScrollRestoration } from 'react-router-dom'

export default function Root() {
    return (
      <div>
      <Nav />
        <main>
            <Header />
            <Services />
            <Reviews />
            <Contact />
            <Footer />
            <ScrollRestoration />
        </main>
      </div>

    )
}