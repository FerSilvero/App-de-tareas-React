import React from 'react'
import Tarea from '../componentes/Tarea'
import '../hojas-de-estilos/TareaPage.css'

function TareaPage() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal' >
        <h1>Escribe tus tareas</h1>
        <Tarea />
      </div>
    </div>
  )
}

export default TareaPage