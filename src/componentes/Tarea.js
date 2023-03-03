import React from 'react'
import { useState } from 'react'
import '../hojas-de-estilos/Tarea.css'
import ListaDeTareas from './ListaDeTareas';
import TareaFormulario from './TareaFormulario';

function Tarea() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);  
  }
/*
  const modificarTarea = (id, nuevoTexto) => {
    setTareas((prev) =>
    prev.map((item) => (item.id === id ? nuevoTexto : item))
    );
  };
*/

const modificarTarea = (id, nuevoTexto) => {
  setTareas((prev) =>
    prev.map((tarea) =>
      tarea.id === id ? nuevoTexto : tarea
    )
  );
};

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
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
        tareas.map((tarea) =>
        <ListaDeTareas
          tareas={tareas}
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

export default Tarea