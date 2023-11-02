import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import adaptacionColor from '../../../assets/img/HomeImg/habilidadesIconos/1adaptacionColor.png'
import adaptacionLapiz from '../../../assets/img/HomeImg/habilidadesIconos/2adaptacionLapiz.png'
import creatividadColor from '../../../assets/img/HomeImg/habilidadesIconos/3creatividadColor.png'
import creatividadLapiz from '../../../assets/img/HomeImg/habilidadesIconos/4creatividadLapiz.png'
import desafiosColor from '../../../assets/img/HomeImg/habilidadesIconos/5desafiosColor.png'
import desafiosLapiz from '../../../assets/img/HomeImg/habilidadesIconos/6desafiosLapiz.png'
import gestion_de_equiposColor from '../../../assets/img/HomeImg/habilidadesIconos/7gestion-de-equiposColor.png'
import gestion_de_equiposLapiz from '../../../assets/img/HomeImg/habilidadesIconos/8gestion-de-equiposLapiz.png'
import libroColor from '../../../assets/img/HomeImg/habilidadesIconos/9libroColor.png'
import libroLapiz from '../../../assets/img/HomeImg/habilidadesIconos/10libroLapiz.png'
import optimizacion from '../../../assets/img/HomeImg/habilidadesIconos/11optimizacion-webColor.png'
import optimizacion_webLapiz from '../../../assets/img/HomeImg/habilidadesIconos/12optimizacion-webLapiz.png'
import requerimientoColor from '../../../assets/img/HomeImg/habilidadesIconos/13requerimientoColor.png'
import requerimientoLapiz from '../../../assets/img/HomeImg/habilidadesIconos/14requerimientoLapiz.png'

import cambiar from '../../../assets/img/HomeImg/habilidadesIconos/cambiar.png'






function Habilidades() {

  const [HabBlan_Vista, setHabBlan_descripcion] = useState(true);



  const Toggle_HabBlan_Vista = () => {
    setHabBlan_descripcion(!HabBlan_Vista); 
  
  };

  return (
    <>
<img className='VistaHabBlandas VistaHabBlandas--hover' onClick={Toggle_HabBlan_Vista} src={cambiar} alt="" />

    {HabBlan_Vista ? (
      <section className='HomeSect2__ContSkills quitarPadding'>
        <div className='habBlandas'>

          <div className='habBlandas__Item borderRight ColorGray bordeRadioLeft_up'>
            <img className='habBlandas__Icono ' src={adaptacionLapiz} alt="icono de adaptacion" />
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
          </div>

          <div className='habBlandas__Item borderLeft ColorGray bordeRadioRight_up'>
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
            <img className='habBlandas__Icono' src={libroLapiz} alt="Icono de un libro con serebro" />
          </div>

          <div className='habBlandas__Item borderRight'>
            <img className='habBlandas__Icono ' src={creatividadLapiz} alt="icono de creatividad" />
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
          </div>

          <div className='habBlandas__Item borderLeft'>
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
            <img className='habBlandas__Icono' src={requerimientoLapiz} alt="Icono de Requerimientos" />
          </div>

          <div className='habBlandas__Item borderRight ColorGray bordeRadioLeft_down'>
            <img className='habBlandas__Icono ' src={optimizacion_webLapiz} alt="Icono de Optimizacion" />
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
          </div>

          <div className='habBlandas__Item borderLeft ColorGray bordeRadioRight_down'>
            <p className='habBlandas__Text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto alias tenetur unde laudantium iure reiciendis, excepturi tempore molestias ad, in non maxime neque? Deserunt non accusantium voluptatibus laboriosam excepturi pariatur.</p>
            <img className='habBlandas__Icono' src={desafiosLapiz} alt="Icono de desafios" />
          </div>

        </div>
      </section>
    ):(
      <section className='HomeSect2__ContSkills MaxWith1000px'>
        <div className='habBlandas2'>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={adaptacionColor} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={creatividadColor} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={libroColor} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={desafiosColor} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={optimizacion} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={gestion_de_equiposColor} alt="" />
          </div>

          <div className='habBlanTargeta'>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={requerimientoColor} alt="" />
          </div>
          

        </div>
      </section>
    )}

    

    </>
  )
}

export default Habilidades