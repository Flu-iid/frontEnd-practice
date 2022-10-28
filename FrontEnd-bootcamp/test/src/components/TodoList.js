import React from "react";

function TodoList({ list, setList, edit, setEdit }) {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <span>{index}</span> <span></span>
            <span>{item.id}</span> <span></span>
            {item.editable ? (
              <input
                type="text"
                value={item.text}
                onChange={(e) => {
                  setEdit(e.target.value);
                }}
              />
            ) : (
              <span>{item.text}</span>
            )}
            <span></span>
            <button
              onClick={() => {
                item.editable = !item.editable;
                setEdit(edit)
              }}
            >
              Edit
            </button>
            <span></span>
            <button onClick={() => console.log(item.finished)}>Fine</button>
            <span></span>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
