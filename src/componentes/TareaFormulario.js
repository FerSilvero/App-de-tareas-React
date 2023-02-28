import React from 'react'
import { useState } from 'react'
import '../hojas-de-estilos/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');
  const [errores, setErrores] = useState(null)

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    if(input.trim() === '') {
      setErrores('¡Requerido!')
      return;
    }
    
    if (input.length < 2) {
      setErrores('¡Muy corto!');
      return;
    }

    if (input.length > 35) {
      setErrores('¡Muy largo!');
      return;
    }

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
    setInput('');
    setErrores(null)
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        value={input}
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='shadow__btn'>
        Agregar Tarea
      </button>
      {
        errores&&
        <div className='errores'>
          {errores}
        </div>
      }
    </form>
  )
}

export default TareaFormulario