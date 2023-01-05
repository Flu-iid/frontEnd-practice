import React, {useState} from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text) {
    setTodo((Last) => [...Last, {task:text, complete:false}])
    }
  }


  const removeTodo = (index) => {
    setTodo((Last) => {
      const help = [...Last]
      help.splice(index, 1)
      return [...help]
    })
  }

  return (
    <div>
    <form className="App" onSubmit={(event) => event.preventDefault()}>
      <input 
      value={text}
      type="text"   
      onChange={(event) => setText(event.target.value)}
      autoFocus
      />
      <button
      type="submit"
      onClick={() => {
        addTodo();
        setText("");
      }}
      >
        
        Add
      </button>
      </form>
      <p>{todo.map((item, index) => (
        <div>
          <span key={index}>{item}</span>
          <button onClick={() => removeTodo(index)}>X</button>
          <button onClick={() => {todo.complete = true}}>Done</button>
        </div>
      ))}</p>
    </div>
  )



}

export default App;
