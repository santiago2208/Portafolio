import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Firebase/Firebase';
import Tecnologias from './componentes/Tecnologias'
import Habilidades from './componentes/Habilidades'
import FotoSantiago from '../../assets/img/HomeImg/fotoSanti2.jpeg'
import'./Home.css'



function Home() {

  const [ShowTecnologias, setShowTecnologias] = useState(true);
  const [ShowHabilidades, setShowHabilidades] = useState(false);



  const ToggleTecnologias = () => {
    setShowHabilidades(false); 
    setShowTecnologias(true); 
  };

  const ToggleHabilidades = () => {
    setShowTecnologias(false); 
    setShowHabilidades(true); 
  };

  return (
    <main>
      <section className='HomeCont'>
      
        <section className='HomeSect1'>
          <section className='HomeSect1__contleft'>
            {/* <h2>Santiago Alvarez Porras</h2> {//posible opcion}*/}
            <img src={FotoSantiago} className='HomeSect1__FotoSanti' alt="" />
          </section>
          
          <section className='HomeSect1__contRight'>
            <h1 className='HomeSect1__Title'>Sobre mi</h1>
            <p className='HomeSect1__Text'>
              Hola, soy Santiago Alvarez Porras, soy Desarrollador de software con fortaleza en el desarrollo web, tengo solidos conocimientos en HTML y CSS, actualemnte uso mucho y estoy fortaleciendo el uso de React, Firebase, git y GitHub. <br /><br />

              Tengo experiencia laboral como desarrollador fullStack y como asistente en desarrollo de software, Actualemente estoy en busca de empleo, preferiblemente en desarrollo web. Ademas de buscar empleo tambien estoy formandome mas utilizando la plataforma de platzi  y estoy desarrolladon proyectos personales

              <br /> <br />
              Me apaciona aprender cosas nuevas, programar y pensar en soluciones a diferentes problemas sociales y medioa ambientales atravez de la tecnologia o emprendimientos.
            </p>
          </section>
        </section>

        
        <section className='HomeSect2'>
          <div className='HomeSect2__Header'>
            <h1 className='HomeSect2__title'>↓ Skills ↓</h1>
          </div>  

          <div className='HomeSect2__Main'>
            <div className='HomeSect2__Opciones'>
              <div className={`HomeSect2__btnleft ${ShowTecnologias ? 'btnSelected1':''}`} 
              onClick={ToggleTecnologias}
              >
                Uso de tecnologias
              </div>
              <div className={`HomeSect2__btnRight ${ShowHabilidades ? 'btnSelected1':''}`}
              onClick={ToggleHabilidades}>
                Habilidades blandas
              </div>

              <div ></div>
            </div>

              {ShowTecnologias && (
                <Tecnologias/>
              )}

              {ShowHabilidades && (
                <Habilidades/>
              )}
                   


          </div>
        </section>
      
      </section>
    </main>
  )
}

export default Home