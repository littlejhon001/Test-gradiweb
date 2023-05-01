import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import "../swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Test = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getApi();
  }, []);

  const url = "https://gradistore-spi.herokuapp.com/products/all";
  const getApi = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data.products.nodes);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(products);

  const estrella = (product) => {
    // Recupero los tags numéricos del producto
    const numericTags = product.tags.filter((tag) => !isNaN(Number(tag)));

    // Calculo el promedio de los tags numéricos
    const numericTagsAvg =
      numericTags.reduce((acc, tag) => acc + Number(tag), 0) /
      numericTags.length;

    // Convierto el promedio en un valor de 0 a 100
    const ratingValue = Math.min(numericTagsAvg, 500);

    // Calculo el número de estrellas en base al ratingValue
    let stars = 0;
    if (ratingValue >= 0 && ratingValue <= 200) {
      stars = "⭐";
    } else if (ratingValue >= 201 && ratingValue <= 300) {
      stars = "⭐⭐";
    } else if (ratingValue >= 301 && ratingValue <= 400) {
      stars = "⭐⭐⭐";
    } else if (ratingValue >= 401 && ratingValue <= 500) {
      stars = "⭐⭐⭐⭐";
    } else if (ratingValue >= 501) {
      stars = "⭐⭐⭐⭐⭐";
    }
    return stars;
  };

  return (
    
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {products?.map((product) => (
     
            <SwiperSlide key={product.id} className="card mt-2 mb-5 ">

              <div className="box-primary">
                 <img
                src={product.featuredImage.url}
                className="card-img-top"
                alt={product.title}
              />
              </div>
             
              <div className="card-body ">
                <h5>{product.title}</h5>
                <div className="d-flex justify-content-between text-size">
                  <div className="d-flex ">
                    <span>{estrella(product)}</span>
                    <p>({product.tags[0]}) </p>
                  </div>
                  <div className="d-flex ">
                    <p className="tachado">€{product.prices.min.amount} </p>
                    <p className="ms-2 ">€{product.prices.max.amount}</p>
                  </div>
                </div>
                </div>
                <div className="texto-encima">
                   <a href="#" className="myButton ">Add to cart</a>
                </div>
               
           
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  );
};

export default Test;
