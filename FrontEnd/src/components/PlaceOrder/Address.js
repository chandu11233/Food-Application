import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodstore } from "../../App";
import "./Address.css";

function Address() {
  const { cart, setCart } = useContext(foodstore);
  const [name, setName] = useState("");
  const [pn, setPn] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({ err: false, msg: "" });
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [successModal, setSuccessModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pn || !address) {
      setError({ err: true, msg: "Enter all the details." });
    } else {
      // const order = {
      //   name: name,
      //   pn: pn,
      //   address: address,
      //   orders: cart,
      // };
      setCart([]);
      setSuccessModal(!successModal);
    }
  };

  useEffect(() => {
    let t = 0;
    cart.forEach((pro) => {
      t = t + pro.quantity * pro.price;
    });
    setTotal(t);
  }, [cart]);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    if (!localStorage.getItem("loginToken")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="address">
      <div className="leftright">
        <div className="right">
          <h2>Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            {error && <p>{error.msg}</p>}
            <input
              type="text"
              placeholder="Phone Number"
              className="input-box"
              value={pn}
              onChange={(e) => {
                setPn(e.target.value);
              }}
            ></input>
            <textarea
              cols="30"
              rows="5"
              placeholder="Delivery Adress"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
            <div className="btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/order")}
              >
                cancel
              </button>
              <button type="submit" className="btn">
                Order Now
              </button>
            </div>
          </form>
        </div>
        <div className="left">
          <h2>Payment Details</h2>
          <div className="payment-details">
            <h3 className="items-heading">Items</h3>
            {cart.map((item) => {
              return (
                <p>
                  {item.name}-{item.quantity}
                </p>
              );
            })}
            <p>
              Total payable amount:
              <span> ₹ {Math.round(total)}</span>
            </p>
            <div className="cash-options">
              <p className="payment-heading">Select Payment Method</p>
              <div>
                <input
                  type="radio"
                  id="cod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="upi"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="upi">UPI</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {successModal && (
        <div className="modal">
          <div className="suc">
            <h2>Order placed successfully.</h2>
            <p>
              Your order will be delivered to {address} in few minutes.
              <br />
              Our agent will contact you on {pn}.
            </p>
            <button
              type="button"
              className="sucbtn"
              onClick={() => navigate("/order")}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Address;
