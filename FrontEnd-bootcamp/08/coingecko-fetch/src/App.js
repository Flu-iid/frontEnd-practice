import React, {useState} from "react";
import axios from "axios";

function App() {
// states
const [list, setList] = useState([])

// functions
  const getData = async () => {
    let data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    console.log(data)
    setList(data.data)
  };

  // JSX
  return (<div className="App">
    <button onClick={() => { getData() }}>GetData</button>
    <div>{
        list.map((item) => 
          <p key={item.id}>{item.name}</p>
         )
      }</div>
  </div>);
}

export default App;
