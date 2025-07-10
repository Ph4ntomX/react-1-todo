
function TodoItem(props) {
  const { name, isCompleted } = props
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <button className={`btn btn-sm btn-${isCompleted ? "success" : "light"}`}>
          <i className={isCompleted ? "bi bi-check-square" : "bi bi-square"}></i>
        </button>
        <span className={`ms-2 ${isCompleted ? "text-decoration-line-through" : ""}`}>{name}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoItem
