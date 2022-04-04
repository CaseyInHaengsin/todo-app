import React, { useState, useContext, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import TodoContext from './TodoContext'

export default function TodoForm ({ setShowModal, showModal }) {
  const [editEnabled, setEditEnable] = useState(true)
  const [complete, setcomplete] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')
  const { addTodo, todoEdit, updateTodoItem, setTodoEdit } = useContext(
    TodoContext
  )

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

      if (complete === true) {
        setcomplete(false)
        setShowModal(false)
      }
      setEditEnable(true)
      setShowModal(false)
    } else {
      addTodo({ name, description })
      setShowModal(false)
    }

    setName('')
    setDescription('')
  }

  useEffect(() => {
    if (!todoEdit.edit === true) return
    setEditEnable(false)
    setName(todoEdit.item.name)
    setDescription(todoEdit.item.description)
  }, [todoEdit, showModal])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex z-20 fixed w-4/5 h-3/4 bg-black/[.25] justify-center'
    >
      <FaTimes
        className='absolute right-5 top-2'
        size={30}
        onClick={() => {
          setEditEnable(false)
          setShowModal(false)
          setTodoEdit({ item: {}, edit: false })
          setName('')
          setDescription('')
        }}
      />
      <div className='my-3 mt-16'>
        <div className='mb-2 mt-2 py-2 focus:outline-none w-80'>
          <input
            className='input text-color w-full background-color mb-2'
            onChange={e => {
              if (error) setError('')
              setName(e.target.value)
            }}
            type='text'
            value={name}
            placeholder='Add name'
          />
        </div>
        <div className='align-center w-full mb-2 mt-2 py-2'>
          <input
            className='input w-80 mb-2 text-color background-color'
            onChange={e => {
              setDescription(e.target.value)
            }}
            value={description}
            type='text'
            placeholder='Add Description'
          />
        </div>
        {error && <h5>Error {error}</h5>}
        <button className='btn w-full'>{editEnabled ? 'Add' : 'Update'}</button>
      </div>
    </form>
  )
}
