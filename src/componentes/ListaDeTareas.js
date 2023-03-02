import React from 'react'
import { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilos/ListaDeTareas.css'

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function ListaDeTareas({ tareas, completarTarea, eliminarTarea, modificarTarea }) {

  const [edit, setEdit] = useState({
    id: null,
    texto: '',
  });

  const submitUpdate = (texto) => {
    modificarTarea(edit.id, texto);
    setEdit({
      id: null,
      texto: '',
    });
  };

  if (edit.id) {
    return <TareaFormulario edit={edit} onSubmit={submitUpdate} />;
  }

  return tareas.map((tarea) => (
    <div
          className={tarea.completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}
          key={tarea.id}>
            <div 
              className='tarea-texto'
              onClick={() => completarTarea(tarea.id)}>
              {tarea.texto}
            </div>
            <div 
              onClick={() => eliminarTarea(tarea.id)}>
              <AiOutlineCloseCircle className='tarea-icono-eliminar' 
              />
            </div>
            <div
              onClick={() => setEdit({id: tarea.id, texto: tarea.texto})}>
              <BiEdit className='tarea-icono-modificar' 
              />
            </div>
        </div>
  ))
}

export default ListaDeTareas