import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import "./OrderPage.css";
import { foodstore } from "../../App";


const Service = () => {
  const navigate = useNavigate();
  const [foodType, setFoodType] = useState("All");
  const { food, cart, setCart } = useContext(foodstore);
  const [catFood,setCatFood] = useState([]);

  const categories = Array.from(new Set(food.map(f => f.category)));

  useEffect(() => {
    if(foodType === "All") setCatFood(food)
    else{
      const categoryFood = food.filter(f => f.category === foodType);
      setCatFood(categoryFood)
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

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === fooditem.id);

    if (existingItemIndex !== -1) {
      // If item exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item does not exist, add it to the cart
      setCart([...cart, fooditem]);
    }

  };

  const handleOrderNow = (id, name, img, description, price) => {
    handleAddToCart(id, name, img, description, price);
    navigate("/address");
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
          {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
        </select>
      </div>
      <div className="prods">
      {catFood.length >= 1 ? (
          <div className="grids">
            {catFood.map((pd) => (
              <Product key={pd.id} product={pd} clickable={false}>
                <div className="priceandbtn">
                  <p className="text-2xl font-bold  text-primary">
                    Price:<span className="text-red">₹ {pd.price}</span>
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
