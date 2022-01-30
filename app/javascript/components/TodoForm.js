import React, { useState, useContext, useEffect } from 'react'
import TodoContext from './TodoContext'

function TodoForm () {
  const [editEnabled, setEditEnable] = useState(true)
  const [task, setTask] = useState('')
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')
  const { addTodo, todoEdit, updateTodoItem } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (!task) setError('You need a task')
    if (todoEdit.edit === true) {
      updateTodoItem(todoEdit.item.id, {
        task: task,
        description: description
      })
    } else {
      addTodo({ task, description })
    }
    setTask('')
    setDescription('')
  }

  useEffect(() => {
    if (!todoEdit.edit === true) return
    setEditEnable(false)
    setTask(todoEdit.item.task)
    setDescription(todoEdit.item.description)
  }, [todoEdit])

  return (
    <form onSubmit={handleSubmit} className='py-4'>
      <div className='flex-col justify-center'>
        <div className='align-center mb-2 mt-2 focus:outline-none '>
          <input
            className='w-1/2 input text-color background-color'
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
            className='w-1/2 input text-color background-color'
            onChange={e => {
              setDescription(e.target.value)
            }}
            value={description}
            type='text'
            placeholder='Add Description'
          />
        </div>
        {error && <h5>Error {error}</h5>}
        <button className='btn w-1/2'>{editEnabled ? 'Add' : 'Update'}</button>
      </div>
    </form>
  )
}

export default TodoForm
