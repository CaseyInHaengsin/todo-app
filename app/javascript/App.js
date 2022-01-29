import React from 'react'
import TodoContext, { TodoProvider } from './components/TodoContext'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <TodoProvider>
      <div className='font-sans background-color h-1/3 flex flex-col w-full'>
        <Header />
        <div className='px-4 py-38'>
          <div className='background-color h-screen relative w-full text-center'>
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
