import { useState } from "react"

function TodoForm(props) {
    const { tasks, setTasks } = props

    const [taskName, setTaskName] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        
        if (taskName.trim() === '') return
        
        setTasks([...tasks, {name: taskName, completed: false}])
        setTaskName('')
    }
     return (
        <form onSubmit={onSubmit}> 
            <div className="d-flex justify-content-between align-items-center" >
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
            <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
            </div>
        </form>
    )
}

export default TodoForm
