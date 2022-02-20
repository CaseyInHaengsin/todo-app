import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoContext from './components/TodoContext'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
