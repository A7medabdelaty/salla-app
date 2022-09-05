import React, { useEffect, useState } from "react";
import Product from "./Product";
import Axios from "axios";
import PaginationComponent from "./Pagination";
export default function ProductsContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    Axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=20").then(
      (value) => {
        setData(value.data);
      }
    );
  }, []);

  return (
    <>
      <div className="container">
        <div className="row flex-wrap gap-4 justify-content-around my-4">
          {data.map((product, index) => (
            <Product
              title={product.title}
              image={product.images[0]}
              description={product.description}
              //inStock={product.inStock}
              price={product.price}
              key={index}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <PaginationComponent />
    </>
  );
}
