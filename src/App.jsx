import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const [tasks, setTasks] = useState([
    {name: 'Task 1', completed: true},
    {name: 'Task 2', completed: false},
    {name: 'Task 3', completed: false},
  ])

  return (
    <>
      <div
      className="card rounded shadow-sm"
      style={{ maxWidth: '500px', margin: '60px auto' }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>

        <TodoList tasks={tasks}/>
        
        <div className="mt-4">
          <TodoForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
