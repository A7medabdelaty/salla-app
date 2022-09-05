import "./App.css";
import Navigationbar from "./components/Navbar";
import { CounterContextProvider } from "./context/CounterContext";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Products from "./routes/Products";
import SingleProductItem from "./components/SingleProductItem";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CounterContextProvider>
        <CartContextProvider>
          <Navigationbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProductItem />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </CounterContextProvider>
    </>
  );
}

export default App;
