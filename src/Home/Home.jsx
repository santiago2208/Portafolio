import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Firebase/Firebase';
import HomeMenu from '../assets/img/Homefondo.jpg'
import'./Home.css'



function Home() {

  return (
    <main>
      <img src={HomeMenu} className='homeimg' alt="" />
    </main>
  )
}

export default Home