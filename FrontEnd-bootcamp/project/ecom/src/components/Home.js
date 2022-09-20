import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";

function Home() {
  const [show, setShow] = useState([]);
  const getProducts = async (api) => {
    const response = await axios
      .get(`${api}/products`)
      .catch((err) => console.log(err));
    console.log(response);
    setShow(response.data);
  };
  useEffect(() => {
    getProducts(api);
  }, []);

  const cardView = (obj) => {
    return (
      <div>
        <img src={`${api}/${obj.image}`} alt={obj.name} />
        <p>{obj.name}</p>
        <p>{obj.price}</p>
        <p>{obj.review}</p>
      </div>
    );
  };

  return (
    <div className="products">
      {show.map((item) => (
        <div key={item.id} onClick={() => {}}>
          {cardView(item)}
        </div>
      ))}
    </div>
  );
}

export default Home;
