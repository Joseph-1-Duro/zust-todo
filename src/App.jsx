import CustomForm from "./CustomForm"
import TodoList from "./TodoList";

const App = () => {
  return (
    <main className="app content-wrapper">
      <h1>Todo App with Zustand</h1>
      <CustomForm />
      <TodoList />      
    </main>
  )
}
export default App