import React from 'react'
import '../css/Footer.css'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'> 
      <p className='footer-text'>Desarrollado por Fernando Silvero</p>
      <div 
        onClick={() => window.open('https://github.com/FerSilvero/App-de-tareas-React', '_blank')}>
        <BsGithub className='github-icon'/>
      </div>
      <div 
        onClick={() => window.open('https://www.linkedin.com/in/fersilvero/', '_blank')}>
        <BsLinkedin className='linkedin-icon'/>
      </div>
    </div>
  )
}

export default Footer