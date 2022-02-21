import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import UserContext from './context/UserContext'
import { Link } from 'react-router-dom'

export default function Header ({ navigate }) {
  const location = useLocation()
  const { user, loadingUser, setUser } = React.useContext(UserContext)
  const [useUserLink, setUseUserLink] = React.useState(false)
  const pathToGoTo = {}

  if (location?.pathname && location?.pathname === '/signup') {
    pathToGoTo.url = '/login'
    pathToGoTo.text = 'Log In'
  } else if (location?.pathname && location?.pathname === '/login') {
    pathToGoTo.url = '/signup'
    pathToGoTo.text = 'Sign Up'
  }

  const userSignOut = () => {
    localStorage.removeItem('token')
    setUser({})
    setUseUserLink(false)
    navigate('/login')
  }

  React.useEffect(() => {
    if (loadingUser === false && user?.id) {
      setUseUserLink(true)
    }
  }, [])

  return (
    <div className='py-8 background-color h-14 flex justify-around text-xl'>
      <h1 className='text-color text-right basis-2/4'>Task Manager</h1>
      <div className='text-color text-right basis-1/4'>
        {location?.pathname ? (
          <ul className='flex justify-evenly'>
            <li>
              <Link to={pathToGoTo?.url ? pathToGoTo?.url : '/'}>
                {pathToGoTo?.text}
              </Link>
            </li>
          </ul>
        ) : null}

        {useUserLink ? (
          <ul className='flex justify-evenly'>
            <li>
              <button onClick={userSignOut}>Sign Out</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}
