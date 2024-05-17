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

import { Dishes as food } from "./components/Data/FoodData";
import "./index.css";

export const foodstore = createContext();

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const createGallery = () => {
      const uniqueCategories = Array.from(
        new Set(food.map((f) => f.category))
      );
      const selectedItems = [];
      uniqueCategories.forEach((category) => {
        const itemsInCategory = food.filter(
          (f) => f.category === category
        );
        if (itemsInCategory.length > 0) {
          selectedItems.push(itemsInCategory[0]); // Select the first item in each category
        }
      });
      return selectedItems;
    };
    setGallery(createGallery());
  },[]);

  return (
    <>
      <foodstore.Provider value={{ food, cart, gallery, setCart }}>
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
