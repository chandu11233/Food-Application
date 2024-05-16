import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ManageCart from "./components/ManageCart/ManageCart";
import NotFound from "./components/NotFound/NotFound";
import OrderPage from "./components/OrderPage/OrderPage";
import Address from "./components/PlaceOrder/Address";
import SignUpPage from "./components/SignUp/SignUpPage";
import SignInPage from "./components/SignIn/SignInPage";
import "./index.css";

export const foodstore = createContext();

function App() {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/foodItems")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <>
      <foodstore.Provider value={{ food, cart, gallery, setCart, orders }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/manageOrder" element={<ManageCart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </foodstore.Provider>
    </>
  );
}

export default App;
