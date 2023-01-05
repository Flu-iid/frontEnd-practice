import { useState } from "react";

function App() {
  const [show, setShow] = useState("");
  const [edit, setEdit] = useState("");
  const [todo, setTodo] = useState([]);

  const addToList = () => {
    if (show) {
      const help = [
        ...todo,
        {
          id: todo.length ? todo[todo.length - 1].id + 1 : 1,
          value: show,
          isCompleted: false,
          isEditable: false,
        },
      ];
      setTodo(help);
      setShow("");
    }
  };
  const removeFromList = (index) => {
    const help = [...todo];
    help.splice(index, 1);
    setTodo(help);
  };

  const changeItemStatus = (e, index) => {
    const help = [...todo];
    help[index].isCompleted = e.target.checked;
    setTodo(help);
  };

  const editItemValue = (index) => {
    const help = [...todo];
    if (help[index].isEditable) {
      help[index].isEditable = false
      help[index].value = edit
      setTodo(help)
    } else {
      help[index].isEditable = true
      setEdit(help[index].value)
      setTodo(help)
    }
  };

  console.log(todo);
  return (
    <div className="text-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="border-solid border-2 border-red-800"
          type="text"
          placeholder="enterValue"
          onChange={(e) => setShow(e.target.value)}
          value={show}
          autoFocus
        />
        <button
          type="submit"
          onClick={() => {
            addToList();
          }}
        >
          add
        </button>
      </form>
      <div className="flex flex-col items-center">
        {todo.map((item, index) => (
          <div className="flex [&>*]:mx-2" key={index}>
            <input
              type="checkbox"
              onChange={(e) => {
                changeItemStatus(e, index);
              }}
            />
            {item.isEditable ? (
              <input onChange={(e) => setEdit(e.target.value)}
              value={edit}/>
            ) : (
              <p className={`${item.isCompleted && "line-through"}`}>
                {item.value}
              </p>
            )}
            <button
              onClick={() => {
                removeFromList(index);
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                editItemValue(index);
              }}
            >
              {item.isEditable ? "Done" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//edit needs work
