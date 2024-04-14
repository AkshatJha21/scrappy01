import React, { useEffect, useState } from 'react'

const TodoList = ({ todos }) => {
  const [done, setDone] = useState(false);

  
  return (
    <div>
        {todos.map((todo) => {
            return (
                <>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <button onClick={() => {
                      setDone(true);
                      fetch("http://localhost:3000/done" ,{
                        method: "PUT",
                        body: JSON.stringify({
                          id: todo._id
                        }),
                        headers: {
                          "Content-type": "application/json"
                        }
                      }).then(async function (res) {
                        await res.json();
                        console.log("Todo updated");
                      })
                    }}>{todo.completed == true ? 'Done' : 'Mark as done'}</button><br />
                    <button>Delete</button>
                </>
            )
        })}
    </div>
  )
}

export default TodoList