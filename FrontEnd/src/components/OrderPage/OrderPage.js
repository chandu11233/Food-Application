import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import "./OrderPage.css";
import { foodstore } from "../../App";

import axios from "axios";

const Service = () => {
  const navigate = useNavigate();
  const [foodType, setFoodType] = useState("All");
  const { food, setCart } = useContext(foodstore);
  const [foodCart, setFoodCart] = useState({});
  const [catFood,setCatFood] = useState([])

  useEffect(() => {
    if(foodType === "All") setCatFood(food)
    else{
      fetch(`http://localhost:3001/foodItems/?category=${foodType}`)
        .then((res) => res.json())
        .then((data) => setCatFood(data));
    }
  },[foodType,setCatFood,food])

  const handleAddToCart = (id, name, img, description, price) => {
    const fooditem = {
      id: id,
      name: name,
      img: img,
      description: description,
      price: price,
      quantity: 1,
    };
    setFoodCart(fooditem);
    axios
      .post("http://localhost:3001/cart", fooditem)
      .then((resp) => {
        console.log(resp.data);
        return;
      })
      .catch((error) => {
        alert("item already added to cart")
        return;
      });
  };

  const handleOrderNow = (id, name, img, description, price) => {
    handleAddToCart(id, name, img, description, price);
    navigate("/address");
  }

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [setCart, foodCart]);

  return (
    <div className="service">
      <h1>Choose Your Order</h1>
      <div className="search">
        <label htmlFor="foodtype">Place Your Order: </label>
        <select
          className="input-box"
          name="foodtype"
          value={foodType}
          onChange={(e) => {
            setFoodType(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Biryani">Biryani</option>
          <option value="Curry">Curry</option>
          <option value="Noodles">Noodles</option>
          <option value="Roti">Roti</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div className="prods">
      {catFood.length >= 1 ? (
          <div className="grids">
            {catFood.map((pd) => (
              <Product key={pd.id} product={pd} clickable={false}>
                <div className="priceandbtn">
                  <p className="text-2xl font-bold  text-primary">
                    Price:<span className="text-red">₹{pd.price}</span>
                  </p>
                  <button
                    onClick={()=>handleAddToCart(
                      pd.id,
                      pd.name,
                      pd.img,
                      pd.description,
                      pd.price
                    )}
                    className="btn"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={()=>handleOrderNow(
                      pd.id,
                      pd.name,
                      pd.img,
                      pd.description,
                      pd.price
                    )}
                    className="btn"
                  >
                    Order Now
                  </button>
                </div>
              </Product>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
