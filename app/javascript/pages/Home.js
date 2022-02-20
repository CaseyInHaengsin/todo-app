import React from 'react'
import { Navigate } from 'react-router-dom'
import TodoContext, { TodoProvider } from '../components/TodoContext'
import Header from '../components/Header'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Search from '../components/Search'
import { FiPlus } from 'react-icons/fi'

export default function Home () {
  const token = localStorage.getItem('token')
  if (token == null) {
    return <Navigate to='/login' />
  }
  return (
    <TodoProvider>
      <div className='font-sans background-color h-1/3 flex flex-col w-full'>
        <Header />
        <div className='flex justify-center p-5'>
          <Search />
          <FiPlus
            onClick={() => {
              const d = document.getElementById('add-form')
              document.body.classList.add('bg-slate-300/[.05]')
              d.style.display = 'block'
            }}
            color='white'
            size={40}
          />
        </div>
        <div id='modal-content' className='px-4 py-38'>
          <div className='background-color h-screen relative w-full text-center'>
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}
