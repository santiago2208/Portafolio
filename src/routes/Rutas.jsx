import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Nav from '../components/nav/Nav'
import Home from '../components/home/Home'
import AgregarPersona from '../components/AgregarPersona/AgregarPersona'
import  Deudores  from "../components/Deudores/Deudores"
// import CobrarDeuda from "../components/Deudores/CobrarDeuda";
// import PrestarMas from "../components/Deudores/PrestarMas";

//se crea un comentario

const Routing = () => {

    
    return (
      <>
      { <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregarpersona" element={<AgregarPersona />} />
        <Route path="/deudores" element={<Deudores />} />
        {/* <Route path="/cobrardeuda/:id" element={<CobrarDeuda />} /> */}

        {/* <Route path="/prestarmas/:id" element={<PrestarMas />} /> */}
      </Routes>
        </>
    )
}

export default Routing