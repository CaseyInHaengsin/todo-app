// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div class='font-sans bg-white h-screen flex flex-col w-full'>
      <div class='h-screen bg-gradient-to-r'>
        <div class='px-4 py-48'>
          <div class='relative w-full text-center'>
              hello
          </div>
        </div>
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
