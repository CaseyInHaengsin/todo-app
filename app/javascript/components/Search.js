import React from 'react'
import TodoContext from './TodoContext'
import { FiPlus } from 'react-icons/fi'
// TODO - Add todocontext and narrow task list based on search
function Search () {
  const { filterTodos } = React.useContext(TodoContext)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    filterTodos(search)
  }, [search])

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
