import React from 'react'
import TodoContext from './TodoContext'
import Todo from './Todo'

function TodoList () {
  const { todos } = React.useContext(TodoContext)
  return (
    <div>
      {todos &&
        todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            description={todo.description}
            task={todo.task}
          />
        ))}
    </div>
  )
}

export default TodoList
