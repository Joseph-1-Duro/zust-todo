import useTodoStore from "./stores/useTodoStore"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const { list, clearList } = useTodoStore();

  return (
    <section className="todo-list">
      <h3>List</h3>

      {
        list.length === 0 &&
       "👆.. No Task Available, Create something ..👆"
      }

      {
        list.sort((a, b) => b.id - a.id).map((item) => {
          return (
            <TodoItem key={item.id} {...item} />
          )
        })
      }

      { 
        list.length >= 1 && 
        <button style={{marginBlockStart: "2rem"}} className="clear-btn" onClick={clearList}>
          Clear All
        </button>
      }
    </section>
  )
}
export default TodoList