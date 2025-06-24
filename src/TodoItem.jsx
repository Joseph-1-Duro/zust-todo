import { useEffect } from "react";
import useTodoStore from "./stores/useTodoStore"
import UpdateModal from "./UpdateModal";

const TodoItem = ({ id, text }) => {
  const { deleteTask, toggleUpdate, update } = useTodoStore();

  const removeTask = () => {
    deleteTask(id)
  }

  const updateTask = () => {
    toggleUpdate()
    console.log(id)
  }

  useEffect(() => {
    document.documentElement.style.overflow =
      update ?
      'hidden'
      :
      'auto'
  }, [update])

  return (
    <div className="todo-item" id={id}>
      <p>{text}</p>

      <div className="button-group">
        <button onClick={removeTask}>🗑️</button>
        <button onClick={updateTask}>📝</button>
      </div>

      {update && <UpdateModal id={id} />}
    </div>
  )
}

export default TodoItem