import React from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const BASE_URL = 'http://localhost:3000'
const Token = localStorage.getItem('token')

export function UserProvider ({ children }) {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${Token}` }
  })

  const [user, setUser] = useState({})
  // TODO: Have a useEffect that checks for an existing session. If there is one, I'm good

  const userLogin = async (loginId, password) => {
    return await api.post('/login', { login_id: loginId, password: password })
  }
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
