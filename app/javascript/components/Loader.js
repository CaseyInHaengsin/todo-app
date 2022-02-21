import React from 'react'
import { FiLoader } from 'react-icons/fi'

export default function Loader () {
  return (
    <div className='font-sans background-color h-1/3 flex flex-col w-full'>
      <div className='flex justify-center p-5'></div>
      <div className='background-color grid place-items-center h-screen w-full text-center'>
        <FiLoader
          color='white'
          className='animate-[spin_2s_ease-in-out_infinite]'
          size={100}
        />
      </div>
    </div>
  )
}
