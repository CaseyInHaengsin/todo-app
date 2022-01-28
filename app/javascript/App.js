import React from 'react'
import TodoContext, { TodoProvider } from './components/TodoContext'
import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <TodoProvider>
      <div className='font-sans bg-white h-screen flex flex-col w-full'>
          <div className='px-4 py-48'>
            <div className='bg-red-500 h-screen relative w-full text-center'>
            <TodoForm />
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
