import React from 'react'
import TodoContext from './TodoContext'

function Todo ({ todo }) {
  const { deleteTodo, editTodo } = React.useContext(TodoContext)

  return (
    <ul className='py-3'>
      <li className='bg-yellow-200 flex justify-evenly px-0 mx-0'>
        <h4 className='basis-40'>{todo.task}</h4>
        <p className='basis-40'>{todo.description}</p>
        <button onClick={() => editTodo(todo)} className='text-left'>Edit</button>
        <button
          className='text-left basis-1'
          onClick={() => {
            deleteTodo(id)
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  )
}

export default Todo
