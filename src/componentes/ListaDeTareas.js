import React from 'react'
import { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilos/ListaDeTareas.css'

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function ListaDeTareas({ id, texto, completada, completarTarea, eliminarTarea, modificarTarea }) {

  const [edit, setEdit] = useState({
    id: null,
    texto: texto,
    completada: completada
  });

  const submitUpdate = (texto) => {
    modificarTarea(edit.id, texto);
    setEdit({
      id: null,
      texto: texto,
      completada: completada
    });
  };

  if (edit.id) {
    return <TareaFormulario edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div 
    className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono-eliminar' 
        />
      </div>
      <div 
        onClick={() => setEdit({id: id, texto: texto, completada: completada})}>
        <BiEdit className='tarea-icono-modificar' 
        />
      </div>
  </div>
  )
}

export default ListaDeTareas