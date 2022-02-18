import React, { useState, useContext, useEffect } from 'react'
import TodoContext from './TodoContext'

export default function TodoForm () {
  const [editEnabled, setEditEnable] = useState(true)
  const [complete, setcomplete] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')
  const { addTodo, todoEdit, updateTodoItem } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (!name) {
      setError('You need a name')
      return
    }
    if (todoEdit.edit === true) {
      updateTodoItem(todoEdit.item.id, {
        name: name,
        description: description,
        complete
      })
      if (complete === true) setcomplete(false)
      setEditEnable(true)
    } else {
      addTodo({ name, description })
    }
    document.getElementById('add-form').style.display = 'none'
    setName('')
    setDescription('')
  }

  useEffect(() => {
    if (!todoEdit.edit === true) return
    setEditEnable(false)
    setName(todoEdit.item.name)
    setDescription(todoEdit.item.description)
  }, [todoEdit])

  return (
    <form
      onSubmit={handleSubmit}
      id='add-form'
      className='py-4 hidden z-1 fixed w-full h-1/2 overflow-auto py-8 bg-slate-400/[.9]'
    >
      <div className='flex-col justify-center'>
        <div className='align-center mb-2 mt-2 focus:outline-none '>
          <input
            className='w-1/2 input text-color background-color'
            onChange={e => {
              if (error) setError('')
              setName(e.target.value)
            }}
            type='text'
            value={name}
            placeholder='Add name'
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
