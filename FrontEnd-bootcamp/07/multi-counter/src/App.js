// import Counter from "./components/Counter";
import React, { useState } from "react";

function App() {
  // states

  const [list, setList] = useState([]);

  // functions

  const itemAdder = () => {
    const help = [
      ...list,
      {
        id: list.length ? list[list.length - 1].id + 1 : 1,
        intervalId: list.length ? list[list.length - 1].id + 1 : 1,
        num: 0,
        isCounting: false,
      },
    ];
    setList(help);
    console.log("count");
  };

  const render = () => {
    const help = [...list];
    setList(help);
  };

  const count = (item) => {
    if (item.isCounting) {
      item.isCounting = false;
      clearInterval(item.intervalId);
      render();
    } else {
      item.isCounting = true;
      item.intervalId = setInterval(() => {
        console.log(item.id);
        item.num += 1;
        render();
      }, 100);
    }
  };

  const startCounting = (item) => {
    if (!item.isCounting) {
      item.isCounting = true;
      item.intervalId = setInterval(() => {
        console.log(item.id);
        item.num += 1;
        render();
      }, 100);
    }
  };

  const stopCounting = (item) => {
    if (item.isCounting) {
      item.isCounting = false;
      clearInterval(item.intervalId);
      render();
    }
  };

  const renderSwitch = (index) => {
    if (list.length == 1) {
      return;
    } else {
      switch (index) {
        case list.length - 1:
          return <button onClick={() => {
            startPrevious(index)
          }}>start Previous</button>;
        case 0:
          return <button onClick={() => {
            startNext(index)
          }}>start Next</button>;

        default:
          return (
            <>
              <button onClick={() => {
                startPrevious(index)
              }}>start Previous</button>
              <button onClick={() => {
                startNext(index)
              }}>start Next</button>
            </>
          );
      }
    }
  };

  const startNext = (index) => { 
    stopCounting(list[index])
    startCounting(list[index+1])
   }

  const startPrevious = (index) => { 
    stopCounting(list[index])
    startCounting(list[index-1])
   }

  // JSX

  return (
    <div className="App">
      <div className="Navbar">
        <button
          onClick={() => {
            list.forEach((item) => {
              stopCounting(item);
            });
            itemAdder();
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            list.forEach((item) => {
              startCounting(item);
            });
          }}
        >
          Start All
        </button>
        <button
          onClick={() => {
            list.forEach((item) => {
              stopCounting(item);
            });
          }}
        >
          Stop All
        </button>
      </div>
      <div className="Counter">
        {list.map((item, index) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  count(item);
                }}
              >
                {item.isCounting ? "stop" : "count"}
              </button>
              <span>{item.num}</span>
              {renderSwitch(index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
