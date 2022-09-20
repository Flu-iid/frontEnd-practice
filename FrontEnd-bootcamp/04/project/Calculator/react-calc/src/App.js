import React, {useState} from "react"

function App() {
const [operate, setOperate] = useState()
const [show, setShow] = useState()

const calculate = () => {
  setShow(operate)
}

const addValue = (val) =>{
  setOperate(val)
}

  return (
    <div id="calc" className="App">
      <div id="view">
        <form id="operation-content" onSubmit={e=>e.preventDefault()}>
        {/* <input id="operation-view" onChange={(e)=>{setOperate(e.target.value)}} autoFocus/> */}
        <p id="operation-view" >{operate}</p>
        <button type="submit" onClick={()=>{calculate()}}>enter</button>
        </form>
        <p id="result">{show}</p>
      </div>
      <div id="operations">
      <button onClick={(e)=>{addValue(e.target.textContent)}}>1</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>2</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>3</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>4</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>5</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>6</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>7</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>8</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>9</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>0</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>/</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>*</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>-</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>+</button>
      <button onClick={(e)=>{addValue(e.target.textContent)}}>AC</button>
      </div>
    </div>
  );
}

export default App;
