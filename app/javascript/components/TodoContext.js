import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = React.createContext()

export function TodoProvider ({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Get things done',
      description: 'Do this task without asking questions'
    }
  ])
  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  const updateTodoItem = (id, updatedItem) => {
      console.log('id', id)
      console.log(updatedItem)
    setTodos(
      todos.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    )
    console.log('new todos', todos)
  }

  const editTodo = item => {
      console.log('edit todo')
    setTodoEdit({ item, edit: true })
  }

  const addTodo = newTodo => {
    newTodo.id = uuidv4()
    setTodos([...todos, newTodo])
  }

  const deleteTodo = id => {
      console.log('clicked delete')
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        todoEdit,
        updateTodoItem
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
