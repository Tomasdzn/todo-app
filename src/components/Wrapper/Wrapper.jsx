import React, { useState } from 'react'
import './Wrapper.css'
import Form from '../Form/Form'
import TaskList from '../TaskList/TaskList'

const Wrapper = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (newTaskText) => {
    const textoConvertido = convertirPrimeraLetraMayuscula(newTaskText);
    setTasks([...tasks, textoConvertido])
  }

  const convertirPrimeraLetraMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  return (
    <div className='wrapper'>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default Wrapper