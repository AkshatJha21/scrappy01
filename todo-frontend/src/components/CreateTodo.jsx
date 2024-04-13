import React, { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
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
        <button onClick={() => {
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
                alert("Todo added");
            })
        }}>Add Todo</button>
    </div>
  )
}

export default CreateTodo