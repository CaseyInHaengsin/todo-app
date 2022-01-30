import React from 'react'
import TodoContext from './TodoContext'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
import Todo from './Todo'

function TodoList () {
  const { todos } = React.useContext(TodoContext)
  return (
    <div className='py-3 container shadow-xl shadow-black rounded-md'>
      <AnimatePresence>
        {todos &&
          todos.map(todo => (
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

export default TodoList
