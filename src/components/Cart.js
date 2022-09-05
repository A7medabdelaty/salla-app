import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartContext } from "../context/CartContext";
import { CounterContext } from "../context/CounterContext";

export default function Cart(props) {
    let CartData = useContext(CartContext);
    let { show, handleShow, handleClose } = CartData;

    let counterData = useContext(CounterContext);
    console.log(counterData.counter);

  return (
    <>
      <Button onClick={handleShow}>
        Cart {counterData.counter}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
