import { useState } from "react";

function App() {
  const [data, setData] = useState('')
  const [list, setList] = useState([])


  return (
    

    <div className="App">
      <button onMouseEnter={(e)=> {
        setData(1)
        setList(data ? [...list, data] : list)
        console.log(data)
        console.log(list)
      }}
      >show</button>
      <div>{list.map((item, index)=> {
        return <p key={index}>{item}</p>
      })}</div>
    </div>
  );
}

export default App;
