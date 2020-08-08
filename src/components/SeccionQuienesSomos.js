import React from 'react';
import musimundo from '../imgs/musimundo.jpg';
import trascopier from '../imgs/trascopier.png';
import creditoArgentino from '../imgs/creditoArgentino.png';
import grupoCarsa from '../imgs/grupoCarsa.jpg';
import grupoTrasorras from '../imgs/grupoTrasorras.jpeg';
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';


const SeccionQuienesSomos = () => (
    <section id="QuienesSomos">
        <ScrollAnimation animateIn="animate__animated animate__fadeIn animate__delay-0.2s">
        <h1>Clientes con los que operamos de forma frecuente</h1>
        </ScrollAnimation>
        <div>
        
        <div><ScrollAnimation animateIn="animate__animated animate__slideInLeft"><img src={musimundo} alt=""></img></ScrollAnimation></div>
        <div><ScrollAnimation animateIn="animate__animated animate__slideInLeft"><img src={trascopier} alt=""></img></ScrollAnimation></div>
        
        <div><ScrollAnimation animateIn="animate__animated animate__slideInUp"><img src={creditoArgentino} alt=""></img></ScrollAnimation></div>    
        
        <div><ScrollAnimation animateIn="animate__animated animate__slideInRight"><img src={grupoCarsa} alt=""></img></ScrollAnimation></div>
        <div><ScrollAnimation animateIn="animate__animated animate__slideInRight"><img src={grupoTrasorras} alt=""></img></ScrollAnimation></div>
        </div>
    </section>
);

export default SeccionQuienesSomos;