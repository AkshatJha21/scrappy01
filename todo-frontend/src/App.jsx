import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <>
      <h2 className='header'>Scrappy Todo</h2>
      <CreateTodo />
      <TodoList key={todos._id} todos={todos}/>
    </>
  )
}

export default App
