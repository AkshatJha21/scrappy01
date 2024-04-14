import React, { useState } from 'react'
import './createTodo.css'

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div className='container'>
        <input type="text" placeholder='Title' onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }}/>
        <br />
        <input type="text" placeholder='Description' onChange={(e) => {
            const value = e.target.value;
            setDescription(e.target.value);
        }}/>
        <br />
        <button className='add' onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function (res) {
                await res.json();
                console.log("Todo added");
                window.location.reload();
            })
        }}>ADD TODO</button>
    </div>
  )
}

export default CreateTodo