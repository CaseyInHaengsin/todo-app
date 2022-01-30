import React from 'react'
import TodoContext from './TodoContext'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'

function Todo ({ todo }) {
  const { deleteTodo, editTodo, updateTodoItem } = React.useContext(TodoContext)
    const completedClick = () => {
        console.log('clicked')
        updateTodoItem(todo.id, {...todo, completed: !todo.completed})
    }
  return (
    <ul>
      <li className='text-color flex justify-evenly align-middle py-4'>
        {todo.completed ?  <FiCheckCircle onClick={completedClick} size={30} /> : <FiCircle onClick={completedClick} size={30} />}
        <h4 className='basis-20'>{todo.task}</h4>
        <p className='basis-40'>{todo.description}</p>
        <button
          onClick={() => {
            console.log(todo)
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
  )
}

export default Todo
