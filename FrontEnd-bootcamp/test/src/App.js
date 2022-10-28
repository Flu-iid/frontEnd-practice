import { useState } from "react";
// import { Button } from "react-bootstrap";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [show, setShow] = useState("");
  const [edit, setEdit] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <TodoInput show={show} setShow={setShow} setList={setList} />
      <TodoList list={list} setList={setList} edit={edit} setEdit={setEdit}/>
    </div>
  );
}
export default App;
