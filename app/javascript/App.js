import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users/signin' element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
