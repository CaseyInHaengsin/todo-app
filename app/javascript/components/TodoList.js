import React from 'react'
import TodoContext from './TodoContext'
import Todo from './Todo'

function TodoList () {
  const { todos } = React.useContext(TodoContext)
  return (
    <div className='py-3 shadow-lg bg-gradient-to-tr from-gray-800 via-purple-900 to-violet-600/[.05]'>
      {todos &&
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
    </div>
  )
}

export default TodoList
