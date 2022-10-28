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
                value={edit}
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
                if (item.editable) {
                  item.text = edit;
                  item.editable = false;
                } else if (!item.editable) {
                  setEdit(item.text);
                  item.editable = true;
                }
                setList((last) => [...last]);
              }}
            >
              Edit
            </button>
            <span></span>
            <button
              onClick={() => {
                setList((last) => {
                  const help = [...last];
                  help.splice(index, 1);
                  return help;
                });
              }}
            >
              Fine
            </button>
            <span></span>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
