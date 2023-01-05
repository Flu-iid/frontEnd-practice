import React, {useState} from "react";

export const ToDo = () => {

    const [text, setText] = useState("");   /*input text*/
    // const [show, setShow] = useState("");   /*show*/
    const [todo, setTodo] = useState({});   /*save to todoarray*/
    
    return (
        <div className="main">
            <form className="input-container"
             onSubmit={(event)=>{(event).preventDefault()}}> {/*to prevent form from rerendering page*/}
                <input
                 value={text}
                 type="text" 
                 className="input-box"
                 onChange={(event) => setText(event.target.value)}
                 autoFocus/>
                <button
                 type="submit"
                 id="add" 
                 title="Add"
                 onClick={() => {
                    setTodo(({key:value}) => {
                        const helpKey = Array.from({length:10})
                    });
                    setText("");
                }}>✍️</button>
            </form>
            <div className="checklist">
                {todo}
            </div>
            <button id="reset" title="Reset">❌</button>
        </div>
    )
};

// export const DoBox = () => {
//     return (
//         <div className="item-box">
//             <button></button>
//             <p></p>
//             <button></button>
//         </div>
//     )
// }

