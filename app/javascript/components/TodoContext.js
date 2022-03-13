import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import UserContext from './context/UserContext'
import Error from './Error'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = React.createContext()
const BASE_URL = 'http://localhost:3000'
let Token = localStorage.getItem('token')

export function TodoProvider ({ children }) {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${Token}` }
  })

  const { loadingUser, user } = useContext(UserContext)

  const [showModal, setShowModal] = useState(false)
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loadingUser === false && user?.id && localStorage.getItem('token')) {
      const getTasks = async () => {
        return await axios.get(`${BASE_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
      }
      getTasks().then(resp => {
        const data = resp?.data
        setTodos(data.tasks)
      })
    }
  }, [loadingUser, loading])

  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  const updateTodoItem = (id, updatedItem) => {
    const updateItem = async () => {
      return await api.put(`/api/tasks/${id}`, {
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
        Token,
        setSearchTerm,
        searchTerm,
        deleteTodo,
        editTodo,
        todoEdit,
        updateTodoItem,
        searchTerm,
        showModal,
        setShowModal,
        setSearchTerm,
        setTodoEdit
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
