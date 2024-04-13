import React, { useState } from 'react'

const TodoList = ({ todos }) => {
  const [done, setDone] = useState(false);

  
  return (
    <div>
        {todos.map((todo) => {
            return (
                <>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <button>{todo.completed == true ? 'Done' : 'Mark as done'}</button><br />
                    <button>Delete</button>
                </>
            )
        })}
    </div>
  )
}

export default TodoList