import React, { useState } from 'react'
import './todolist.css'

const TodoList = ({ todos }) => {
  const [done, setDone] = useState(false);

  return (
    <div className='list'>
        {todos.map((todo) => {
            return (
                <div className='todo'>
                    <h2 className='title'>{todo.title}</h2>
                    <p className='description'>{todo.description}</p>
                    <div className='btns'>
                      <button className='done' onClick={() => {
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
                          window.location.reload();
                        })
                      }}>{todo.completed == true ? 'Done' : 'Mark as done'}</button>
                      <button className='delete' onClick={() => {
                        fetch("http://localhost:3000/remove" ,{
                          method: "DELETE",
                          body: JSON.stringify({
                            id: todo._id
                          }),
                          headers: {
                            "Content-type": "application/json"
                          }
                        }).then(async function (res) {
                          await res.json();
                          console.log("Todo deleted");
                          window.location.reload();
                        })
                      }}>Delete</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList