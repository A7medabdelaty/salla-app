import { Axios } from "axios";
import React, { useEffect } from "react";
import { useState, createContext } from "react";
import Navigationbar from "../components/Navbar";
import Product from "../components/Product";

export let CartContext = createContext();

export function CartContextProvider(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let contextValue = { show, handleClose, handleShow };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
