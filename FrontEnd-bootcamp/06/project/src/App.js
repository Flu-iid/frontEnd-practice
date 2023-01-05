// import Box from "./components/Box";
import Input from "./components/Input";
import List from "./components/List";

import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState("")
  
  const notify = () => toast.success('🦄 Success', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div id="box" className="App">
        <Input text={text} setText={setText} 
        todo={todo} setTodo={setTodo} 
        toastify={notify}/>
        <List todo={todo} setTodo={setTodo}
        edit={edit} setEdit={setEdit} />
        <ToastContainer />
    </div>
  );
}

export default App;
