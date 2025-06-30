import { useState } from "react";
import useTodoStore from "./stores/useTodoStore"

const UpdateModal = () => {
  const { toggleUpdate, updateId, updateText, setUpdateId } = useTodoStore();

  const [ textContent, setTextContent ] = useState('');

  const closeModal = () => {
    toggleUpdate()
  }
  
  const handleFormAction = (e) => {
    e.preventDefault()
    
    if (!textContent) return
    
    updateText(updateId, textContent);

    setTimeout(() => {
      setTextContent('')
      setTimeout(() => {
        toggleUpdate()
      }, 500)
    }, 500)

    setUpdateId(null)
  }
  
  return (
    <div onSubmit={handleFormAction} className="modal-container">
      <h4>Update Task </h4>
      <button onClick={closeModal}>close</button>

      <div className="modal">        
        <form className="modal-form">
          <input 
            type="text"
            placeholder="Update task.."
            value={textContent}
            autoFocus
            onInput={(e) => setTextContent(e.target.value)}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
export default UpdateModal;