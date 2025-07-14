import { useState } from "react"

function TodoForm(props) {
    const { tasks, setTasks } = props

    const [taskName, setTaskName] = useState('')
    return (
        <form onSubmit={(event) => event.preventDefault()}> 
            <div className="d-flex justify-content-between align-items-center" >
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
            <button className="btn btn-primary btn-sm rounded ms-2" onClick={(event) => {
                if (taskName.trim() === '') return
                
                console.log(event) 
                setTasks([...tasks, {name: taskName, completed: false}])
                setTaskName('')
            }}>Add</button>
            </div>
        </form>
    )
}

export default TodoForm