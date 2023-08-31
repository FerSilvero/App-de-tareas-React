import React from 'react'
import '../css/TodoPage.css'
import Todo from '../components/Todo'
import Footer from '../components/Footer'

function TodoPage() {
  return (
      <>
      <div className='container-todos'>
        <h1>Escribe tus tareas</h1>
        <Todo />
      </div>
        <Footer />
      </>
  )
}

export default TodoPage