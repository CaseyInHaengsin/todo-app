import React from 'react'

export default function Error (props) {
  React.useEffect(() => {
    if (props.msg) {
      const el = document.getElementById('error-modal')
      el.style.display = 'block'
      window.addEventListener('click', event => {
        if (event.target !== el) {
          el.style.display = 'none'
          location.reload()
        }
      })
    }
  }, [])

  if (props.msg) {
    return (
      <div
        id='error-modal'
        className='py-4 z-1 fixed w-full h-1/2 overflow-auto py-8 bg-slate-300/[.05]'
      >
        <span>Error</span>
        <p>{JSON.parse(props.msg).message}</p>
      </div>
    )
  }
  return props.children
}
