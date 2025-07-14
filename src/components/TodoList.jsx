import TodoItem from "./TodoItem"

function TodoList(props) {
    const { tasks, setTasks } = props
    
    return (
        <ul className="list-group">
          {tasks.map((task, index) => {
            const task1 = () => {
              task.completed = !task.completed

              setTasks([...tasks])
            }
            const task2 = () => {
              tasks.splice(index, 1)
              setTasks([...tasks])
            }

            return <TodoItem key={index} name={task.name} isCompleted={task.completed} switchCompletedTask={task1} deleteTask={task2} />
          })}
        </ul>
    )
}

export default TodoList
