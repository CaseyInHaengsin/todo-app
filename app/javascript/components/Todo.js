import React from 'react'
import TodoContext from './TodoContext'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
import Error from './Error'

function Todo ({ todo }) {
  const {
    deleteTodo,
    todoEdit,
    editTodo,
    updateTodoItem,
    error
  } = React.useContext(TodoContext)
  const completeClick = () => {
    if (todoEdit.edit) return
    updateTodoItem(todo.id, { ...todo, complete: !todo.complete })
  }

  return (
    <Error msg={error}>
      <ul>
        <li className='text-color flex justify-evenly align-middle py-4'>
          {todo.complete ? (
            <FiCheckCircle onClick={completeClick} size={30} />
          ) : (
            <FiCircle onClick={completeClick} size={30} />
          )}
          <h4 className='basis-20'>{todo.name}</h4>
          <p className='basis-40'>{todo.description}</p>
          <button
            onClick={() => {
              const d = document.getElementById('add-form')
              // document.body.classList.add('bg-slate-400/[.4]')
              d.style.display = 'block'
              editTodo(todo)
            }}
            className='text-left basis-2 btn'
          >
            Edit
          </button>
          <button
            className='text-left basis-2 btn'
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </Error>
  )
}

export default Todo
