import React, { useState, useEffect } from "react";
import axios from "axios";

const api = "https://api.coingecko.com/api/v3";

function Page() {
  const [show, setShow] = useState([]);
  const [page, setPage] = useState(1)
  const [pageIndex, setPageIndex] = useState(0)
  const getData = async (url) => {
    const response = await axios.get(url);
    console.log(response);
    setShow(response.data);
  };

  const itemViewLimit = 10

  const pageArray = (data) => { 
    const pageNumbers = Math.ceil(data.length/itemViewLimit)
    return Array.from({length:pageNumbers}, (item, index)=>index+1)
   }


   const pageViewLimit = 10


   const pageNav = (data, pageMinIndex) => { 
    const pageList = pageArray(data)
    }

  useEffect(() => {
    try {
      getData(`${api}/coins/list`);
    } catch (error) {
      console.log(error.message);
    }
  }, []);


  useEffect(() => {
    
  }, [])
  



  return (
    <>
    <div className="pages">{pageArray(show).map((item,index) => { 
      return (
        <button key={index} onClick={() => { 
          setPage(item)
         }}>{item}</button>
      )
     })}
     <p>Pages</p>
     </div>
    <table className="pages-table">
      <thead>
        <tr>
          <th>index</th>
          <th>name</th>
          <th>symbol</th>
        </tr>
      </thead>
      {show.slice((page - 1) * itemViewLimit, page * itemViewLimit).map((item, index) => {
        return (
          <tbody key={item.id}>
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.symbol}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
    </>
  );
}

export default Page;
