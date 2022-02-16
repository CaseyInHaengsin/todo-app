import React, { useContext } from 'react'
import { FiPlus } from 'react-icons/fi'
import TodoContext from './TodoContext'
// TODO - Add todocontext and narrow task list based on search
function Search () {
  const { searchTerm, setSearchTerm } = useContext(TodoContext)
  const [search, setSearch] = React.useState('')
  const form = document.getElementById('add-form')

  return (
    <input
      type='search'
      value={searchTerm}
      className='w-1/2 rounded-md text-color background-color'
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}

export default Search
