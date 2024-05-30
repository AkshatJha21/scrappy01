import React, { useState } from 'react'
import './todolist.css'
import EditTodo from './EditTodo';

const TodoList = ({ todos }) => {
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleClick = (todo) => {
    setCurrentTodo(todo)
  };

  const handleClose = () => {
    setCurrentTodo(null);
  }

  return (
    <>
      {currentTodo && (
        <EditTodo todo={currentTodo} closeDialog={handleClose}/>
      )}
      <div className='list'>
          {todos.map((todo) => {
              return (
                  <div className='todo'>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2 className='title'>{todo.title}</h2>
                        <button className='editBtn' onClick={handleClick(todo)}>Edit</button>
                      </div>                  
                      <p className='description'>{todo.description}</p>
                      <div className='btns'>
                        <button className='done' onClick={() => {
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
                        }}>{todo.completed ? 'Done' : 'Mark as done'}</button>
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
    </>
  )
}

export default TodoList