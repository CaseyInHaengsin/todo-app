import React from 'react'
import LoginSignUpForm from '../components/LoginSignUpForm'
import UserContext, { UserProvider } from '../components/context/UserContext'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'

export default function SignUpPage () {
  let navigate = useNavigate()

  return (
    <div className='font-sans background-color h-1/3 flex flex-col w-full'>
      <Header />
      <div className='flex justify-center p-5'></div>
      <div id='modal-content' className='px-4 py-38'>
        <div className='background-color h-screen relative w-full text-center'>
          <LoginSignUpForm
            title='Sign Up'
            confirmPassword={true}
            navigate={navigate}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  )
}
