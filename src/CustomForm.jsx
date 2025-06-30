import { useState } from "react";
import useTodoStore from "./stores/useTodoStore";

const CustomForm = () => {
  const [inputText, setInputText] = useState('');

  const { addTask } = useTodoStore();

  const handleFormAction = (e) => {
    e.preventDefault();

    if (!inputText) return;

    addTask({
      id: Date.now(),
      text: inputText,
      checked: false
    });

    setInputText('');
  }

  return (
    <form onSubmit={handleFormAction} className="form">
      <input
        autoFocus
        type="text"
        value={inputText}
        onInput={(e) => setInputText(e.target.value)}
        placeholder="Enter a task..."
        name="Todo Task"
        id="Todo-input"
      />
      <button>📥</button>
    </form>
  )
}
export default CustomForm