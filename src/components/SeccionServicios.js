import React from 'react';
import trabajo1 from '../imgs/trabajo1.jpg';
import trabajo2 from '../imgs/trabajo2.jpg';
import trabajo3 from '../imgs/trabajo3.jpg';
import trabajo4 from '../imgs/trabajo4.jpg';
import certificado from '../imgs/certificado.png'
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';



const SeccionServicios = () => (
    <section id="Servicios">
      {/* Card1 */}
      
        <div>
        <ScrollAnimation animateIn="animate__animated animate__slideInLeft">
        <div>
        <img src={trabajo1} alt=""></img>
        </div>
        </ScrollAnimation>
        </div>
        
        <div>
        <ScrollAnimation animateIn="animate__animated animate__fadeIn animate__delay-0.2s">
            <h1>Electricidad</h1>
            <ul>
                <li>Obras y mantenimientos eléctricos</li>
                <li>Electricidad específica para sistemas.</li>
                <li>Poseemos un área de mantenimientos y atención de urgencias locales y empresas</li>
                <li>DCI/CAIE ( para solicitud de medidores  en provincia  y CABA)</li>
                <li>Medición de Puesta a Tierra | Certificado SRT 900/2015‎ </li>
            </ul>          
        </ScrollAnimation>
        </div>
        
        <div>
        <ScrollAnimation animateIn="animate__animated animate__fadeIn animate__delay-0.2s">
            <h1>Redes</h1>
            <ul>
                <li>Cableados estructurados para datos, telefonías y fibra optica. </li>
                <li>Montajes de salas de rack, para datos, telefonía y fibra optica.</li>
                <li>Realización de montajes e instalación de instalaciones eléctricas de alimentación ininterrumpida</li>
                <li>Monjes e instalación de UPS</li>
                <li>Montajes e instalación de grupos electrógenos</li>
                <li>Instalación de Switches, Routers y Hubs según requerimientos.</li>
                <li>Terminaciones con rosetas, periscopios o según requerimientos.</li>
                <li>Instalaciones de vínculos entre oficinas.</li>
                <li>Instalación de rack y patcheras</li>
                <li>Poseemos un área de mantenimientos y atención de urgencias locales y empresas</li>   
            </ul>
        </ScrollAnimation>
        </div>
        
        <div>
        <ScrollAnimation animateIn="animate__animated animate__slideInRight">
        <div>
        <img src={trabajo4} alt=""></img>
        </div>
        </ScrollAnimation>
        </div>

        <div>
        <ScrollAnimation animateIn="animate__animated animate__slideInLeft">
        <div>
        <img src={trabajo2} alt=""></img>
        </div>
        </ScrollAnimation>
        </div>

        <div>
        <ScrollAnimation animateIn="animate__animated animate__fadeIn animate__delay-0.2s">
            <h1>¿Qué ofrecemos?</h1>
            <ul>
                <li>Mantenimiento preventivo periódico de todos los puestos de trabajo</li>
                <li>Testeo de funcionalidad de todos los puestos de red y eléctricos.</li>
                <li>Soporte telefónico y/o vía e-mail.</li>
                <li>Respuesta inmediata en casos de urgencias.</li>
            </ul>
        </ScrollAnimation>
        </div>
      
        
    </section>
);

export default SeccionServicios;