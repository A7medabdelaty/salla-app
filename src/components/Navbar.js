import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">Salla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>
            <NavLink className={"nav-link"} to="products">
              Shop
            </NavLink>
            <NavLink className={"nav-link"} to="about">
              About Us
            </NavLink>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cart />
      </Container>
    </Navbar>
  );
}
