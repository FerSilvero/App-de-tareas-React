import React, { useState } from 'react';
import Tarea from './Tarea'
import '../hojas-de-estilos/TareaFormulario.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = () => {
  const [tareas, setTareas] = useState([]);

  const esquemaTarea = Yup.object().shape({
    texto: Yup.string().min(2, '¡Muy Corto!').max(50, '¡Muy Largo!').required('¡Requerido!')
  });

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

  /*
  const modificarTarea = (id, nuevoTexto) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.texto = nuevoTexto;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  */

  return (
    
    <div className='tareas-lista-contenedor'>
    <Formik 
    initialValues={{ texto: '' }}
    onSubmit={(
      values,
      { resetForm  }
    ) => {
      const nuevaTarea = {
        id: uuidv4(),
        texto: values.texto,
        completada: false
        }
        setTareas([...tareas, nuevaTarea]);
        resetForm({});
        console.log(tareas)
      }}
        validationSchema={esquemaTarea}
      >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form
          className='tarea-formulario'
          onSubmit={handleSubmit}>
          <Field 
            className='tarea-input'
            value={values.texto||''}
            type="text" 
            name="texto" 
            placeholder="Ingresa el nombre de la tarea"
            onChange={handleChange} />
          
          <button className='shadow__btn' type="submit">
            Agregar Tarea
          </button>
          
          <p className='errors'>{errors && errors.texto}</p>
        </Form>
        
      )}
    </Formik>
    
    {
      tareas.map((tarea) => 
        <Tarea
          key={tarea.id}
          id={tarea.id} 
          texto={tarea.texto}
          completada={tarea.completada}
          eliminarTarea={eliminarTarea} 
          completarTarea={completarTarea} />
      ) 
    }
  </div>
  );
};

export default TareaFormulario;