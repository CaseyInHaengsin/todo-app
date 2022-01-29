import React from 'react'
// TODO - Add todocontext and narrow task list based on search
function Search () {
  const [search, setSearch] = React.useState('')
  return (
    <div className='align-center mb-2 mt-2'>
      <input
        type='search'
        value={search}
        className='w-1/2 text-color background-color'
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
