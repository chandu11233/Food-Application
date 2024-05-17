import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodstore } from "../../App";
import "./ManageCart.css";

const ManageOrder = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(foodstore);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    cart.forEach((pro) => {
      t = t + pro.quantity * pro.price;
    });
    setTotal(t);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    if(newQuantity < 1){
      handleDelete(id);
      return;
    }
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleOrder = () => {
    navigate("/address");
  };

  return (
    <>
      <div className="manageorder">
        {cart.length ? (
          <div className="flex">
            <div className="full">
              <h1>
                From <span>Express delivery</span>
              </h1>
              <h2>Will shortly arrive after placing your order.</h2>
              <br />
              {cart.map((pd) => {
                return (
                  <div className="ordercard">
                    <div>
                      <img width="100px" src={pd.img} alt="" />
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => updateQuantity(pd.id, pd.quantity - 1)}
                        className="btn"
                      >
                        -
                      </button>
                      <b>{pd.quantity}</b>
                      <button
                        onClick={() => updateQuantity(pd.id, pd.quantity + 1)}
                        className="btn"
                      >
                        +
                      </button>

                      <br />
                      <b>{pd.price * pd.quantity}</b>
                    </div>
                    <div>
                      <button
                        className="del-btn"
                        onClick={() => handleDelete(pd.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="total">
                <p>
                  <span>Total:</span> ₹{Math.round(total)}
                </p>
                <button onClick={handleOrder} className="pl-btn">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="noorder">
            <h1>Your cart is empty.</h1>
            <button
              onClick={() => {
                navigate("/order");
              }}
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageOrder;
