import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header (props) {
  const location = useLocation()
  const pathToGoTo = {}

  if (location?.pathname === '/signup') {
    pathToGoTo.url = '/login'
    pathToGoTo.text = 'Log In'
  } else if (location?.pathname === '/login') {
    pathToGoTo.url = '/signup'
    pathToGoTo.text = 'Sign Up'
  }
  return (
    <div className='py-8 background-color h-14 flex justify-around text-xl'>
      <h1 className='text-color text-right basis-2/4'>Task Manager</h1>
      <div className='text-color text-right basis-1/4'>
        {location?.pathname ? (
          <ul className='flex justify-evenly'>
            <li>
              <Link to={pathToGoTo?.url}>{pathToGoTo?.text}</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}
