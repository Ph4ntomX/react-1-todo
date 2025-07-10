function TodoForm() {
    return (
        <form className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              required
            />
            <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
          </form>
    )
}

export default TodoForm