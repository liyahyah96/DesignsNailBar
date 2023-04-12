import React from 'react'
import Header from './Header'
import Services from './Services'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'
import { ScrollRestoration } from 'react-router-dom'

export default function Root() {
    return (
      <main>
          <Header />
          <Services />
          <Reviews />
          <Contact />
          <Footer />
          <ScrollRestoration />
      </main>
    )
}