import React from 'react'
import { FiPlus } from 'react-icons/fi'
// TODO - Add todocontext and narrow task list based on search
function Search () {
  const [search, setSearch] = React.useState('')
  const form = document.getElementById('add-form')
  window.onClick = function (event) {
    document.getElementById('add-form').style.display = 'none'
  }
  return (
    <input
      type='search'
      value={search}
      className='w-1/2 rounded-md text-color background-color'
      onChange={e => setSearch(e.target.value)}
    />
  )
}

export default Search
