import React from 'react'
import './TaskList.css'
import Task from '../Task/Task'

const TaskList = ({ tasks }) => {
  return (
    <div className='tasklist-container'>
      {tasks.map((task, index) => (
        <Task key={index} texto={task}/>
      ))}
    </div>
  )
}

export default TaskList