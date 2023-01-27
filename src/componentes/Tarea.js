import React from 'react'
import '../hojas-de-estilos/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea, modificarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono-eliminar' />
      </div>
      <div 
        onClick={() => modificarTarea(id)}>
        <BiEdit className='tarea-icono-modificar' />
      </div>
    </div>
  )
}

export default Tarea