import React from 'react';
import 'animate.css'
const Navbar = () => (
  <nav>
    <ul className="animate__animated animate__fadeInLeft animate__delay-0.8s" >
      <li><a href='#Inicio'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lightning" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
      </svg>Inicio</a></li>
      <li><a href='#Servicios'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5h8v3a4 4 0 0 1-8 0V5z"/>
      <path fill-rule="evenodd" d="M6 1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zM7.115 13.651c.256-.511.385-1.408.385-2.651h1c0 1.257-.121 2.36-.49 3.099-.191.381-.47.707-.87.877-.401.17-.845.15-1.298-.002-.961-.32-1.534-.175-1.851.046-.33.23-.491.615-.491.98h-1c0-.635.278-1.353.918-1.8.653-.456 1.58-.561 2.74-.174.297.099.478.078.592.03.115-.05.244-.161.365-.405z"/>
      </svg>Servicios</a></li>
      <li><a href='#QuienesSomos'> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-question" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
      <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
      </svg>¿Quienes Somos?</a></li>
      <li><a href='#Footer'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
      <circle cx="8" cy="4.5" r="1"/>
      </svg>Info</a></li>
    </ul>
    
    <div>
      <p className="animate__animated animate__fadeIn animate__delay-1s">¡EMERGENCIAS 24HS! COMUNICARSE AL +549-11-12-13-14-15 - MATRICULADO</p> 
    </div>
  </nav>

);

export default Navbar;