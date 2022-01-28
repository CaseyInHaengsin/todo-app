import React, { useState, useContext } from 'react'
import TodoContext from './TodoContext'

function TodoForm () {
  const { addTodo } = useContext(TodoContext)
  const [task, setTask] = useState('')
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (!task) setError('You need a task')
    addTodo({ task, description })
    setDescription('')
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>To Do list</h2>
      <div className='flex-col justify-center'>
        <div className="align-center mb-2 mt-2">
          <input
            className="w-1/2"
            onChange={e => {
              if (error) setError('')
              setTask(e.target.value)
            }}
            type='text'
            value={task}
            placeholder='Add Task'
          />
        </div>
        <div className="align-center mb-2 mt-2">
          <input
            className="w-1/2"
            onChange={e => {
              setDescription(e.target.value)
            }}
            value={description}
            type='text'
            placeholder='Add Description'
          />
        </div>
        {error && <h5>Error {error}</h5>}
        <button className='btn w-1/2'>Add</button>
      </div>
    </form>
  )
}

export default TodoForm
