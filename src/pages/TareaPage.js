import React from 'react'
import ListaDeTareas from '../componentes/ListaDeTareas'
import '../hojas-de-estilos/TareaPage.css'

function TareaPage() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal' >
        <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default TareaPage