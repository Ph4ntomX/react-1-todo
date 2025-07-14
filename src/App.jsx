import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever the storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}


function App() {

  const [tasks, setTasks] = useLocalStorage('tasks', [])

  return (
    <>
      <div
      className="card rounded shadow-sm"
      style={{ maxWidth: '500px', margin: '60px auto' }}
    >
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
