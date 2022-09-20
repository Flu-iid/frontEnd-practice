import React, { useEffect, useState } from "react";

const App = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [change, setChange] = useState("");

    const addToList = () => {
        const help = [...todo];
        help.push({id:help.length ? help[help.length-1].id + 1 : 1, value:text, isComplete:false, isEditable:false})
        text && setTodo(help);
        setText("");
    };

    const removeFromList = (index)=> {
        const help = [...todo]
        help.splice(index,1)
        setTodo(help)
    }

    const completeTodo = (index) => {
        const help = [...todo]
        help[index].isComplete = !help[index].isComplete
        setTodo(help)
    }

    const editList = (index) => {
        const help = [...todo]
        help[index].isEditable = !help[index].isEditable
        setText(help[index].value)
        setTodo(help)
        setText("")
    }

    useEffect(()=>{
        console.table(todo);
    },[todo])

    return (
        <div id="App">
            <form id="todo" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <button onClick={addToList}>+</button>
            </form>
            <div className="list">
                {todo.map((item, index) => {
                    return (<div id={"id"+item.id} key={item.id} style={{display:"flex"}}>
                        <button onClick={()=>{editList(index)}}>{item.isEditable ? "Done" : "Edit"}</button>
                        {item.isEditable 
                        ? <input style={{textDecoration:item.isComplete && "line-through"}} value={item.value} onChange={(e)=>setChange(e.target.value)} type="text"/> 
                        :<p style={{textDecoration:item.isComplete && "line-through"}}>{item.value}</p>}
                        <button onClick={()=>{completeTodo(index)}}>{item.isComplete ? "unDone" : "Done"}</button>
                        <button onClick={()=>removeFromList(index)}>X</button>
                    </div>);
                })}
            </div>
        </div>
    );
};

// input and change need work


export default App;
