import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = React.createContext()

const BASE_URL = 'http://localhost:3000'

export function TodoProvider ({ children }) {
  const api = axios.create({
    baseURL: BASE_URL
  })
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTasks = async () => {
      const resp = await api.get('/api/tasks')
      const data = resp?.data
      return data
    }

    getTasks().then(data => {
      setTodos(data.tasks)
    })
  }, [])

  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  const updateTodoItem = (id, updatedItem) => {
    const updateItem = async () => {
      const updatedResp = await axios.put(`/api/tasks/${id}`, {
        task: updatedItem
      })
      return updatedResp.data
    }
    updateItem()
      .then(data => {
        setTodos(
          todos.map(item =>
            item.id === id ? { ...item, ...updatedItem } : item
          )
        )
        setTodoEdit({ item: {}, edit: false })
      })
      .catch(err => {
        // TODO: Work on error handling here
        console.log(err)
      })
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
    const deleteTodo = async () => {
      const deleted = await api.delete(`/api/tasks/${id}`)
      return deleted
    }

    deleteTodo().then(resp => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
    .catch(err => {
      console.log(err)
    })
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
