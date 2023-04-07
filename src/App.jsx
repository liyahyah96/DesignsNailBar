import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Root from './sections/Root'
import Gallery from './routes/gallery'
import ServicesMenu from './routes/services-menu'
import Manicure from './routes/manicure'
import Pedicure from './routes/pedicure'
import Wax from './routes/wax'
import More from './routes/more'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="gallery" element={<Gallery/>}  />
      <Route path="services-menu" element={<ServicesMenu />} >
        <Route path="manicure" element={<Manicure />}></Route>
        <Route path="pedicure" element={<Pedicure />}></Route>
        <Route path="wax" element={<Wax />}></Route>
        <Route path="more" element={<More />}></Route>
      </Route>
    </Routes>
  )
}

export default App
