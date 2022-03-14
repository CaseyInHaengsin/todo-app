import React from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const UserContext = React.createContext()
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
const Token = localStorage.getItem('token')

export function UserProvider ({ children }) {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${Token}` }
  })

  const [user, setUser] = React.useState({})
  const [error, setError] = React.useState('')
  const [loadingUser, setLoadingUser] = React.useState(true)

  React.useEffect(() => {
    if (Token) {
      api
        .get('/self')
        .then(resp => {
          const user = resp?.data
          setUser({ id: user.id, login_id: user.login_id })
          setLoadingUser(false)
        })
        .catch(err => {
          setError(err?.response?.message)
          setLoadingUser(false)
        })
    }
    setLoadingUser(false)
  }, [])

  const userLogin = async (loginId, password, path) => {
    const signUpOrIn = async () => {
      return await api.post(path, {
        login_id: loginId,
        password: password
      })
    }
    signUpOrIn()
      .then(resp => {
        const user = resp?.data
        setUser({ user: user?.user, id: user.id })
        localStorage.setItem('token', user.jwt)
        setLoadingUser(false)
      })
      .catch(err => {
        setError(JSON.stringify(err?.message))
      })
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        error,
        loadingUser,
        setUser,
        setLoadingUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
