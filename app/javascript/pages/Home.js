import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import TodoContext, { TodoProvider } from '../components/TodoContext'
import UserContext from '../components/context/UserContext'
import Header from '../components/Header'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Search from '../components/Search'
import { FiPlus } from 'react-icons/fi'
import Loader from '../components/Loader'

export default function Home () {
  const { user, loadingUser } = React.useContext(UserContext)
  const { showModal, setShowModal } = React.useContext(TodoContext)
  let navigate = useNavigate()
  if (loadingUser === false && !user?.id) {
    return <Navigate to='/login' />
  }
  return (
    <TodoProvider>
      {loadingUser ? (
        <Loader />
      ) : (
        <div className='font-sans background-color h-1/3 flex flex-col w-full'>
          <Header navigate={navigate} />
          <div className='flex justify-center p-5'>
            {showModal && (
              <TodoForm setShowModal={setShowModal} showModal={showModal} />
            )}
            <Search />
            <FiPlus
              onClick={() => {
                setShowModal(true)
              }}
              color='white'
              size={40}
            />
          </div>

          <div id='modal-content' className='px-4 py-38'>
            <div className='background-color h-screen relative w-full text-center'>
              <TodoList setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      )}
    </TodoProvider>
  )
}
