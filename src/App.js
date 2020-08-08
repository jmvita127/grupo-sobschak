import React, {Component}   from 'react';
import Navbar               from './components/Navbar';
import SeccionInicio        from './components/SeccionInicio';
import SeccionServicios     from './components/SeccionServicios';
import SeccionQuienesSomos  from './components/SeccionQuienesSomos';
import Footer               from './components/Footer';

export default class App extends Component {
  render(){
    return (
    
  <div id="App">
    <main>
     <Navbar/>
     <SeccionInicio/>
     <SeccionServicios/>
     <SeccionQuienesSomos/>
     <Footer/>
    </main>
  </div>
   
)}
  
}