import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Nav from '../components/nav/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'



//se crea un comentario

const Routing = () => {

    
    return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>

      </>
    )
}

export default Routing