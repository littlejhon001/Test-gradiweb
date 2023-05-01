import React, { useState, useEffect } from "react";
import axios from "axios";
import "../swiper.css";

const Swiper = () => {
  const [products, setProducts] = useState([]);


  const getApi = async () => {
    const url = "https://gradistore-spi.herokuapp.com/products/all";
    return await axios
      .get(url)
      .then(({ data }) => setProducts(data.results))
      .catch((error) => console.error(error));
  };

  
  useEffect(() => {
    getApi();
  }, []);

  console.log(products)

  return <div>aaa</div>;
};

export default Swiper;
