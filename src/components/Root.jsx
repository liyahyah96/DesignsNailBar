import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Services from './Services'
import Testimonials from './Reviews'
import Contact from './Contact'
import Footer from './Footer'
import { ScrollRestoration } from 'react-router-dom'

export default function Root() {
    return (
      <main>
        <Nav />
        <Header />
        <Services />
        <Testimonials />
        <Contact />
        <ScrollRestoration />
        <Footer />
      </main>
    )
}