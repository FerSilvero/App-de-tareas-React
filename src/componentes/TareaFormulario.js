import React from 'react'
import { useState, useRef } from 'react'
import '../hojas-de-estilos/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState(props.edit ? props.edit.texto : "");
  const [errores, setErrores] = useState(null)

  const inputRef = useRef(null)

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
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

    props.onSubmit({
      id: uuidv4(),
      texto: input,
      completada: false
    });
    setInput('');
    setErrores(null)
  }

  return (
    <form className='tarea-formulario'>
      {props.edit ? (
        <>
        <input 
        className='tarea-input' //input-editar
        value={input}
        type='text'
        placeholder='Modifica la Tarea'
        ref={inputRef}
        name='texto'
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className='shadow__btn'>
        Editar Tarea
      </button>
      {
        errores&&
        <div className='errores'>
          {errores}
        </div>
      }
        </>
      ) : (
        <>
        <input 
        className='tarea-input' //input-agregar
        value={input}
        type='text'
        placeholder='Escribe una Tarea'
        ref={inputRef}
        name='texto'
        onChange={handleChange}
      />
        <button onClick={handleSubmit} className='shadow__btn'> 
        Agregar Tarea
      </button>
      {
        errores&&
        <div className='errores'>
          {errores}
        </div>
      }
        </>
      )
    }
    </form>
  )
}

export default TareaFormulario