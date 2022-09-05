/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import "./css/singleProduct.css";

export default function SingleProductItem(props) {
  let counterData = useContext(CounterContext);
  let { increment } = counterData;

  let { id } = useParams();
  useEffect(() => {
    console.log(id);
    console.log("Mounted");
    getData();
  }, []);

  let getData = async () => {
    let response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    setProducts(response.data);
    console.log(response.data);
  };
  let [products, setProducts] = useState([]);
  let images = [
    "https://api.lorem.space/image/shoes?w=640&h=480&r=9214",
    "https://api.lorem.space/image/shoes?w=640&h=480&r=1392",
    "https://api.lorem.space/image/shoes?w=640&h=480&r=2299",
  ];
  let { title, description, price, category } = products;
  images = products.images;

  console.log(category);
  return (
    <div className="container">
      <div className="item-info d-flex row justify-content-between">
        <div className="product-slider col-6">
          <Carousel style={{ overflow: "hidden" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Array.isArray(images) ? images[0] : ""}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Array.isArray(images) ? images[1] : ""}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Array.isArray(images) ? images[2] : ""}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="product-info col-6">
          <h2>{title}</h2>
          <p className="text-black-50">{description}</p>
          <p>category: {category?.name}</p>
          <div className="price">
            <button disabled className="btn btn-dark">
              {price} $
            </button>
            <button className="btn btn-primary" onClick={increment}>
              Add To Cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
