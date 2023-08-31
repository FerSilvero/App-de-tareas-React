import React from 'react'
import { useState } from 'react'
import '../css/Todo.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);  
  }
  const modificarTarea = (id, nuevoTexto) => {
    setTareas((prev) =>
      prev.map((tarea) =>
      tarea.id === id ? nuevoTexto : tarea
      )
    );
  }
  
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
    <TodoForm onSubmit={agregarTarea} />
      <div className='container-list-todos'>
      {
        tareas.map((tarea) =>
        <TodoList
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
          modificarTarea={modificarTarea} />
        )
        }
      </div>
    </>
  )
}

export default Todo