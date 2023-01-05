import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, CloseButton, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text) {
      setTodo((last) => [...last, { task: text, completed: false }]);
      toast.success(`${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const removeTodo = (index) => {
    setTodo((last) => {
      const help = [...last];
      help.splice(index, 1);
      return [...help];
    });
    toast.error("deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // const addTodo = () => {
  //   if (text) {
  //     setTodo((last) => [...last, { task: text, completed: false }]);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Your task has been saved",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };

  // const removeTodo = (index) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "Your task has been deleted.", "success");
  //       setTodo((last) => {
  //         const help = [...last];
  //         help.splice(index, 1);
  //         return [...help];
  //       });
  //     }
  //   });
  // };

  const changeStatus = (index) => {
    setTodo((last) => {
      const help = [...last];
      help[index].completed = !help[index].completed;
      return [...help];
    });
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Form.Control
          autoFocus
          value={text}
          type="text"
          onChange={(event) => setText(event.target.value)}
          style={{ width: "30vw" }}
        />
        <Button
          variant="outline-dark"
          onClick={() => {
            setText("");
            addTodo();
          }}
        >
          add
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {todo.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Card
              bg={item.completed ? "success" : "danger"}
              text="light"
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Text>{item.task}</Card.Text>
              </Card.Body>
            </Card>
            <CloseButton onClick={() => removeTodo(index)} />
            <Button
              variant={item.completed ? "danger" : "success"}
              onClick={() => changeStatus(index)}
            >
              {item.completed ? "undone" : "done"}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

{
  /* <input
  value={text}
  type="text"
  onChange={(event) => setText(event.target.value)}
></input> */
}
{
  /* <button
onClick={() => {
  setText("");
  addTodo();
}}
>
add
</button> */
}

{
  /* <span
    style={{ backgroundColor: item.completed ? "lightgreen" : "red" }}
  >
    {item.task}
  </span> */
}
{
  /* <button onClick={() => removeTodo(index)}>X</button> */
}
{
  /* <button onClick={() => changeStatus(index)}>
  {item.completed ? "undone" : "done"}
</button> */
}
