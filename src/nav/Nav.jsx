import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Firebase/Firebase';
import Logo from '../assets/LogoPortafolio2.png'

import'./nav.css'



function Nav() {

  return (
    <nav className='nav'>
        <Link to='/' className='nav_ContLogo nav_ContLogo--Hover'> 
            <img src={Logo}className='nav__Logo' alt="Logo del sitio web" />
            <p className='nav_TextLogo'>Portafolio</p>
        </Link>

        <div className='nav__ContMenu'>
            <Link className='nav__MenuOpcion nav__MenuOpcion--hover'>Proyectos</Link>
            <Link className='nav__MenuOpcion nav__MenuOpcion--hover'>Sobre mi</Link>
            <Link className='nav__MenuOpcion nav__MenuOpcion--hover'>Interaccion</Link>
        </div>
    </nav>
  )
}

export default Nav