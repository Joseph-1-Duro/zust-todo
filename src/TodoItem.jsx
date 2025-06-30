import useTodoStore from "./stores/useTodoStore"

const TodoItem = ({ id, text }) => {
  const { deleteTask, toggleUpdate, setUpdateId } = useTodoStore();

  const removeTask = () => {
    deleteTask(id)
  }

  const updateTask = () => {
    toggleUpdate()
    setUpdateId(id)
  }

  return (
    <div className="todo-item" id={id}>
      <p>{text}</p>

      <div className="button-group">
        <button onClick={removeTask}>🗑️</button>
        <button onClick={updateTask}>📝</button>
      </div>
    </div>
  )
}

export default TodoItem