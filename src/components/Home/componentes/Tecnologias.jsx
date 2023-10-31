import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AndroidStudio from '../../../assets/img/HomeImg/LogosTecnologia/AndroidStudio.png'
import Appsheet from '../../../assets/img/HomeImg/LogosTecnologia/Appsheet.png'
import Blender from '../../../assets/img/HomeImg/LogosTecnologia/Blender.png'
import bootstrap from '../../../assets/img/HomeImg/LogosTecnologia/bootstrap.png'
import C_Sharp from '../../../assets/img/HomeImg/LogosTecnologia/C_Sharp.png'
import CSS from '../../../assets/img/HomeImg/LogosTecnologia/CSS.png'
import Figma from '../../../assets/img/HomeImg/LogosTecnologia/Figma.png'
import Firebase_Logo from '../../../assets/img/HomeImg/LogosTecnologia/Firebase_Logo.png'
import GitYGutHub from '../../../assets/img/HomeImg/LogosTecnologia/GitYGutHub.png'
import Html from '../../../assets/img/HomeImg/LogosTecnologia/Html.png'
import java from '../../../assets/img/HomeImg/LogosTecnologia/java.png'
import javaScript from '../../../assets/img/HomeImg/LogosTecnologia/javaScript.png'
import NodeJS from '../../../assets/img/HomeImg/LogosTecnologia/NodeJS.png'
import PowerApps from '../../../assets/img/HomeImg/LogosTecnologia/PowerApps.png'
import PowerAutomate from '../../../assets/img/HomeImg/LogosTecnologia/PowerAutomate.png'
import Python from '../../../assets/img/HomeImg/LogosTecnologia/Python.png'
import ReactLogo from '../../../assets/img/HomeImg/LogosTecnologia/ReactLogo.png'
import SharePoint from '../../../assets/img/HomeImg/LogosTecnologia/SharePoint.png'
import SQL from '../../../assets/img/HomeImg/LogosTecnologia/SQL.png'
import Unity from '../../../assets/img/HomeImg/LogosTecnologia/Unity.png'
import Unreal from '../../../assets/img/HomeImg/LogosTecnologia/Unreal.png'
import Vite from '../../../assets/img/HomeImg/LogosTecnologia/Vite.jpg'





function Tecnologias() {

  const [MasUsado, setMasUsado] = useState(true);
  const [UsandoActua, setUsandoActua] = useState(false);

  const ToggleMasUsado = () => {
    setMasUsado(true); 
    setUsandoActua(false); 
  };

  const ToggleUsandoActua = () => {
    setMasUsado(false); 
    setUsandoActua(true); 
  };


  return (
    <section className='HomeSect2__ContSkills'>
      <div className='HomeSect2__itemTecn Color_green'>
        <h5 onClick={ToggleMasUsado} className='HomeSect2__TitElemnt'>{MasUsado &&'→'} Lo mas usado {MasUsado && '←'}</h5>
        <h5 onClick={ToggleUsandoActua} className='HomeSect2__TitElemnt'>{UsandoActua && '→'} Usando actualemente {UsandoActua && '←'}</h5>

        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          {MasUsado && (<>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={ReactLogo} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Firebase_Logo} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Html} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={CSS} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={javaScript} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitYGutHub} alt="" /> {/**Pendiente cambiar */}
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitYGutHub} alt="" /> {/**Pendiente cambiar */}
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={NodeJS} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Vite} alt="" />
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={PowerApps} alt="" />
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={PowerAutomate} alt="" />
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={SharePoint} alt="" />
            </div>
          </>)}


          {UsandoActua && (<>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={ReactLogo} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Firebase_Logo} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Html} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={CSS} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={javaScript} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitYGutHub} alt="" /> {/**Pendiente cambiar */}
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitYGutHub} alt="" /> {/**Pendiente cambiar */}
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={NodeJS} alt="" />
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Vite} alt="" />
            </div>
          </>)}
          
        </div>

      </div>


      <div className='HomeSect2__itemTecn Color_lightYellow'>
        <h5 className='HomeSect2__TitElemnt2'>Algo de experiencia y sin volver a practicar</h5>
        
        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={bootstrap} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={java} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={AndroidStudio} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Python} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={SQL} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Figma} alt="" /> {/**Pendiente cambiar */}
          </div>


          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Unity} alt="" /> {/**Pendiente cambiar */}
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Blender} alt="" />
          </div>
       
        </div>

      </div>

      <div className='HomeSect2__itemTecn Color_Orange'>
        <h5 className='HomeSect2__TitElemnt2'>Tecnologias con menos experiencia</h5>
        
        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Unreal} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Appsheet} alt="" />
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={C_Sharp} alt="" />
          </div>
       
        </div>

      </div>

      
    </section>
  )
}

export default Tecnologias