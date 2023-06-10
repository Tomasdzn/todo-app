import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import './Task.css'

const Task = ({ texto }) => {
  const[eliminado, setEliminado] = useState(false);
  const[completada, setCompletada] = useState(false);

  const manejarElimina = () => {
    setEliminado(true);
  }

  const manejarCompletada = () => {
    if(!completada){
      setCompletada(true);
    } else {
      setCompletada(false);
    }
  }

  if(eliminado){
    return null;
  }

  return (
    <div 
      onClick={manejarCompletada} 
      estado={eliminado} 
      completada={completada} 
      className={completada ? 'task completada' : 'task'}>
      {texto}
      <a href="#" onClick={manejarElimina}>
        <AiFillDelete className='icono-delete'/>
      </a>
    </div>
  )
}

export default Task
