import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import "./css/Product.css";

export default function Product(props) {
  let { title, description, image, price, id } = props;
  let counterData = useContext(CounterContext);
  let { increment } = counterData;

  return (
    <div className="card col-3 text-start p-0 ">
      <img src={image} alt="" />
      <div className="px-3 py-2 d-flex justify-content-between align-items-center flex-wrap h-100">
        <div className="col-12">
          <Link
            to={`/products/${id}`}
            className="text-decoration-none text-black"
          >
            <h4>{title}</h4>
          </Link>
          <p className="text-black-50">{description}</p>
        </div>
        <div className="row justify-content-center">
          <h4 className="col-12 text-center mb-3">Price: ${price}</h4>
          <div className="row gap-1 justify-content-between">
            <button className="btn btn-primary float-end col-6 btn-buy">
              Buy Now
            </button>
            <button
              className="btn btn-primary float-end col-6 btn-cart"
              onClick={increment}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//
