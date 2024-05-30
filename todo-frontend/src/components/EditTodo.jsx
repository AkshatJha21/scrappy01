import React, { useState } from 'react'
import './editTodo.css'

const EditTodo = ({ todo, closeDialog }) => {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleEdit = () => {
        fetch("http://localhost:3000/edit", {
            method: "PUT",
            body: JSON.stringify({
                id: todo._id,
                title,
                description
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(async function (res) {
            await res.json();
            console.log("Todo edited successfully");
            closeDialog();
            window.location.reload();
        });
    };

  return (
    <div className='dialog'>
        <div className='dialog-content'>
            <h2>Edit Todo</h2>
            <div className='dialog-input'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='dialog-actions'>
                <button className='apply-changes' onClick={handleEdit}>Apply Changes</button>
                <button className="cancel" onClick={closeDialog}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default EditTodo