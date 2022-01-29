import React, { useState, useContext, useEffect } from 'react'
import TodoContext from './TodoContext'

function TodoForm () {
  const { addTodo, todoEdit, updateTodoItem } = useContext(TodoContext)
  const [editEnabled, setEditEnable] = useState(false)
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

  useEffect(() => {
    if (!todoEdit.edit === true) return
    setEditEnable(false)
    setTask(todoEdit.item.text)
  }, [todoEdit])

  return (
    <form onSubmit={handleSubmit} className='py-4'>
      <div className='flex-col justify-center'>
        <div className='align-center mb-2 mt-2'>
          <input
            className='w-1/2'
            onChange={e => {
              if (error) setError('')
              setTask(e.target.value)
            }}
            type='text'
            value={task}
            placeholder='Add Task'
          />
        </div>
        <div className='align-center mb-2 mt-2'>
          <input
            className='w-1/2'
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
