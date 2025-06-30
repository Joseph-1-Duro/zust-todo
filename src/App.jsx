import { useEffect } from "react";
import CustomForm from "./CustomForm"
import useTodoStore from "./stores/useTodoStore";
import TodoList from "./TodoList";
import UpdateModal from "./UpdateModal";

const App = () => {
  const { update } = useTodoStore();

  useEffect(() => {
    document.documentElement.style.overflow =
      update ?
        'hidden'
        :
        'auto'
  }, [update])

  return (
    <main className="app content-wrapper">
      <h1>Todo App with Zustand</h1>
      <CustomForm />
      <TodoList />

      {update && <UpdateModal />}
    </main>
  )
}
export default App