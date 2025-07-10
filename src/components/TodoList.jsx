import TodoItem from "./TodoItem"

function TodoList(props) {
    const { tasks } = props
    
    return (
        <ul className="list-group">
          {tasks.map((task) => (
            <TodoItem name={task.name} isCompleted={task.completed} />
          ))}
        </ul>
    )
}

export default TodoList
