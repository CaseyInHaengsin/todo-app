import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoContext, { TodoProvider } from './components/TodoContext'
import { UserProvider } from './components/context/UserContext'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </Router>
    </TodoProvider>
  )
}

export default App
