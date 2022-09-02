import React, { Component } from 'react';
import Acerca from './subcomponentes/acerca';
import Patrocinadores from './subcomponentes/patrocinadores';
import Rutas from './subcomponentes/rutas';

class About extends Component {
   render() {


      return (
         <div  className='grid grid-cols-1  rounded-t-2xl rounded-b-2xl bg-d-t-y'>
            <div className='col-span-2 'id='Premios'>
               <Acerca/>
            </div>
            <div className='col-span-2' id='Beneficios'>
               <Patrocinadores/> 
            </div>
            <div id="Rutas" className='col-span-2'>
               <Rutas />
            </div>
         </div>
      );
   }
}

export default About;
