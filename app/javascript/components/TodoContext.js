import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Error from './Error'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = React.createContext()
const BASE_URL = 'http://localhost:3000'
const Token = localStorage.getItem('token');

export function TodoProvider ({ children }) {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {'Authorization': `Bearer ${Token}`}
  })

  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTasks = async () => {
      return await api.get('/api/tasks')
    }

    getTasks().then(resp => {
      const data = resp?.data
      setTodos(data.tasks)
    })
  }, [])

  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  const updateTodoItem = (id, updatedItem) => {
    const updateItem = async () => {
      return await axios.put(`/api/tasks/${id}`, {
        task: updatedItem
      })
    }
    updateItem()
      .then(resp => {
        const data = resp?.data
        setTodos(
          todos.map(item =>
            item.id === id ? { ...item, ...updatedItem } : item
          )
        )
        setTodoEdit({ item: {}, edit: false })
      })
      .catch(err => {
        setError(JSON.stringify(err))
      })
  }

  const filterTodos = filter => {
    if (filter === '') {
      const getTasks = async () => {
        return await api.get('/api/tasks')
      }

      getTasks().then(resp => {
        const data = resp?.data
        setTodos(data.tasks)
      })
    }
    return setTodos(
      todos.filter(
        todo =>
          todo?.name.toLowerCase().includes(filter) ||
          todo?.description.toLowerCase().includes(filter)
      )
    )
  }

  const editTodo = item => {
    setTodoEdit({ item, edit: true })
  }

  const addTodo = newTodo => {
    const add = async () => {
      return await api.post('/api/tasks', {
        task: newTodo
      })
    }
    add()
      .then(resp => {
        const data = resp?.data
        setTodos([...todos, data?.task])
      })
      .catch(err => {
        setError(err)
      })
  }

  const deleteTodo = id => {
    const deleteTodo = async () => {
      return await api.delete(`/api/tasks/${id}`)
    }

    deleteTodo()
      .then(resp => {
        setTodos(todos.filter(todo => todo.id !== id))
      })
      .catch(err => {
        setError(JSON.stringify(err))
      })
  }
  return (
    <TodoContext.Provider
      id='modal-content'
      value={{
        todos,
        error,
        addTodo,
        setSearchTerm,
        searchTerm,
        deleteTodo,
        editTodo,
        todoEdit,
        updateTodoItem,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
