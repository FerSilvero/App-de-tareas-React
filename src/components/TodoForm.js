import React from 'react'
import '../css/TodoForm.css'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';


function TodoForm(props) {
  
  const [input, setInput] = useState(props.edit ? props.edit.texto : '');
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

    props.onSubmit(
      (props.edit ? 
        {
        id: uuidv4(),
        texto: input,
        completada: props.edit.completada
        } : 
        {
        id: uuidv4(),
        texto: input,
        completada: false
        }
      )  
    );
    console.log(props.onSubmit)
    setInput('');
    setErrores(null)
  }
  
  return (
      <form className='todo-form'>
        {props.edit ? (
        <>
        <input className='todo-input'
        value={input}
        type='text'
        placeholder='Modifica la Tarea'
        ref={inputRef}
        name='texto'
        onChange={handleChange}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Editar
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
        <input className='todo-input'
        value={input}
        type='text'
        placeholder='Escribe una Tarea'
        ref={inputRef}
        name='texto'
        onChange={handleChange}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Agregar
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
export default TodoForm