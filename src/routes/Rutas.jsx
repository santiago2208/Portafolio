import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Nav from '../nav/Nav'
import Home from '../Home/Home'



//se crea un comentario

const Routing = () => {

    
    return (
      <>
      { <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        </>
    )
}

export default Routing