import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import '../css/TodoList.css'

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function TodoList({ id, texto, completada, completarTarea, eliminarTarea, modificarTarea }) {

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
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className={completada ? 'container-todo completada' : 'container-todo'}>
      <div 
        className='todo-text'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='container-icon'>
        <div onClick={() => eliminarTarea(id)}>
          <AiOutlineCloseCircle className='icon delete'/>
        </div>
        <div onClick={() => setEdit({id: id, texto: texto, completada: completada})}>
          <BiEdit className='icon edit'/>
        </div>
      </div>
    </div>
  )
}

export default TodoList