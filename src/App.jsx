import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <div className="card rounded shadow-sm" style={{ maxWidth: '500px', margin: '60px auto' }}>
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>

        <TodoList tasks={tasks} setTasks={setTasks}/>
        
        <div className="mt-4">
          <TodoForm tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
