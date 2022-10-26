import { useState } from "react";
// import { Button } from "react-bootstrap";
// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";


function App() {
  const [show, setShow] = useState("")
  const [list, setList] = useState([])
  return (
    <div className="App">
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" value={show} onChange={(e) => { setShow(e.target.value) }}/>
        <button onClick={console.log("why on click gets run :(")}>Add</button>
      </form>
      <p>{list}</p>
    </div>
  );
}

export default App;
