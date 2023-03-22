import React from 'react'
import Tarea from '../componentes/Tarea'
import '../hojas-de-estilos/TareaPage.css'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function TareaPage() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal' >
        <h1>Escribe tus tareas</h1>
        <Tarea />
      </div>  
      <div className='footer'> 
        <p className='texto-footer'>Desarrollado por Fernando Silvero</p>
        <div 
          onClick={() => window.open('https://github.com/FerSilvero/App-de-tareas-React', '_blank')}>
          <BsGithub className='icono-github'/>
        </div>
        <div 
          onClick={() => window.open('https://www.linkedin.com/in/fersilvero/', '_blank')}>
          <BsLinkedin className='icono-linkedin'/>
        </div>
      </div>
    </div>
  )
}

export default TareaPage