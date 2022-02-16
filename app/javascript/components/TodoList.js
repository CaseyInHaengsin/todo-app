import React, { useEffect, useContext, useState } from 'react'
import TodoContext from './TodoContext'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
import Todo from './Todo'

export default function TodoList () {
  const { todos, searchTerm } = useContext(TodoContext)
  const [list, setList] = useState([])

  useEffect(() => {
    setList(
      todos.filter(
        todo =>
          todo.name.toLowerCase().includes(searchTerm) ||
          todo.description.toLowerCase().includes(searchTerm)
      )
    )
  }, [searchTerm])
  return (
    <div id='jon' className='py-3 container shadow-xl shadow-black rounded-md'>
      <AnimatePresence>
        {list.length >= 1
          ? list.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Todo key={item.id} todo={item} />
              </motion.div>
            ))
          : todos.map(todo => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Todo key={todo.id} todo={todo} />
              </motion.div>
            ))}
      </AnimatePresence>
    </div>
  )
}
