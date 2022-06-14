import React from 'react'
import LoginSignUpForm from '../components/LoginSignUpForm'
import UserContext from '../components/context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Loader from '../components/Loader'

export default function LoginPage () {
  const { user, loadingUser, error } = React.useContext(UserContext)
  let navigate = useNavigate()

  if (!loadingUser && user.id) {
    return <Navigate to='/' />
  }
  return (
    <>
      {loadingUser ? (
        <Loader />
      ) : (
        <div className='font-sans background-color h-1/3 flex flex-col w-full'>
          <Header navigate={navigate} />
          <div className='flex justify-center p-5'></div>
          <div id='modal-content' className='px-4 py-38'>
            <div className='background-color h-screen relative w-full text-center'>
              <LoginSignUpForm title='Log In' navigate={navigate} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
