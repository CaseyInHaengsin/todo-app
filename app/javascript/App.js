import React from 'react'
import TodoContext, { TodoProvider } from './components/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <div className='font-sans bg-white h-screen flex flex-col w-full'>
        <div className='h-screen bg-gradient-to-r'>
          <div className='px-4 py-48'>
            <div className='relative w-full text-center'>hello</div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
