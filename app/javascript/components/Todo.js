import React from 'react'
import TodoContext from './TodoContext'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
function Todo ({ todo }) {
  const { deleteTodo, editTodo } = React.useContext(TodoContext)

  return (
    <ul>
      <li className='text-color flex justify-evenly py-4'>
        {todo.completed ?  <FiCheckCircle size={30} /> : <FiCircle size={30} />}
        <h4 className='basis-20'>{todo.task}</h4>
        <p className='basis-40'>{todo.description}</p>
        <button
          onClick={() => {
            console.log(todo)
            editTodo(todo)
          }}
          className='text-left basis-2'
        >
          Edit
        </button>
        <button
          className='text-left basis-2'
          onClick={() => {
            deleteTodo(todo.id)
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  )
}

export default Todo
