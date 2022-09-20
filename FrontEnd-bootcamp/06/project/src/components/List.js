import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const List = ({ todo, setTodo, edit, setEdit }) => {
  const itemCompletionStatus = (index) => {
    const help = [...todo];
    help[index].isCompleted = !help[index].isCompleted;
    setTodo(help);
  };

  const itemEditStatus = (index) => {
    const help = [...todo];
    if (help[index].isEditable) {
      help[index].isEditable = false;
      help[index].value = edit;
      setTodo(help);
    } else {
      help[index].isEditable = true;
      setEdit(help[index].value);
      setTodo(help);
    }
  };

  const deleteItem = (index) => {
    const help = [...todo];
    help.splice(index, 1);
    setTodo(help);
  };

  return (
    <div id="list">
      {todo.map((item, index) => {
        return (
          <Card
            id="list"
            key={index}
            bg= {item.isCompleted ? "dark" : "white"}
            text={item.isCompleted ? "white" : "dark"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>{item.id}</Card.Header>
            <Card.Body>
              <Card.Text>
                {item.isEditable ? (
                  <input
                    onChange={(e) => setEdit(e.target.value)}
                    value={edit}
                    autoFocus
                  />
                ) : (
                  <div>{item.value}</div>
                )}
              </Card.Text>
              <div id="buttons">
                <Button
                variant="secondary"
                  onClick={() => {
                    itemEditStatus(index);
                  }}
                >
                  {item.isEditable ? "Save" : "Edit"}
                </Button>
                <Button
                  onClick={() => {
                    itemCompletionStatus(index);
                  }}
                  variant={item.isCompleted ? "success" : "danger"}
                >
                  {item.isCompleted ? "done" : "undone"}
                </Button>
                <Button
                variant="warning"
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  X
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
