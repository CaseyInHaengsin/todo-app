import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = React.createContext()

const BASE_URL = 'http://localhost:3000'

export function TodoProvider ({ children }) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const getTasks = async () => {
      const resp = await fetch(`${BASE_URL}/api/tasks`)
      const data = await resp.json()
      return data
    }

    getTasks()
      .then(data => {
        setTodos(data.tasks)
      })
    
  }, [])

  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  const updateTodoItem = (id, updatedItem) => {
    console.log('updating item', updatedItem)
    setTodos(
      todos.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    )
    setTodoEdit({item: {}, edit: false})
  }

  const editTodo = item => {
    setTodoEdit({ item, edit: true })
  }

  const addTodo = newTodo => {
    console.log('add todo', newTodo)
    newTodo.id = uuidv4()
    setTodos([...todos, newTodo])
  }

  const deleteTodo = id => {
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
