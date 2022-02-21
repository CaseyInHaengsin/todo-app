import React from 'react'
import Header from './Header'
import UserContext from './context/UserContext'
import { useLocation } from 'react-router-dom'

export default function LoginSignUpForm ({
  title,
  confirmPassword = false,
  navigate
}) {
  const location = useLocation()

  const { userLogin, user, error } = React.useContext(UserContext)
  const [loginId, setLoginId] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    if (password !== passwordConfirmation && location.pathname !== '/login') {
      setError('Passwords do not match')
    }
    userLogin(loginId, password, location.pathname)
  }

  React.useEffect(() => {
    if (user?.id) {
      navigate('/')
    }
  }, [user])

  if (error) {
    window.addEventListener('click', () => {
      window.location.reload()
    })
    return <h1 className='text-xl text-red-500'>{error}</h1>
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='py-4 w-full h-1/2 overflow-auto py-8'
    >
      <div className='flex-col justify-center'>
        <div className='align-center mb-2 mt-2 focus:outline-none'>
          <input
            type='text'
            value={loginId}
            placeholder='Enter login ID'
            className='w-1/2 input text-color background-color'
            onChange={e => {
              setLoginId(e.target.value)
            }}
          />
        </div>
        <div className='align-center mb-2 mt-2 focus:outline-none'>
          <input
            type='password'
            value={password}
            placeholder='Enter Password'
            className='w-1/2 input text-color background-color'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        {confirmPassword ? (
          <div className='align-center mb-2 mt-2 focus:outline-none'>
            <input
              type='password'
              value={passwordConfirmation}
              placeholder='Enter Password'
              className='w-1/2 input text-color background-color'
              onChange={e => {
                setPasswordConfirmation(e.target.value)
              }}
            />
          </div>
        ) : null}
        <button className='btn w-1/2'>{title}</button>
      </div>
    </form>
  )
}
