import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodstore } from "../../App";
import "./Address.css";
import Axios from "../AxiosController/Axios";

function Address() {
  const { cart, setCart } = useContext(foodstore);
  const [name, setName] = useState("");
  const [pn, setPn] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    expDate: "",
  });

  const [successModal, setSuccessModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pn || !address) {
      alert("Enter all the details.");
    } else if (
      !cardDetails.cardNumber ||
      !cardDetails.cvv ||
      !cardDetails.expDate
    ) {
      alert("Enter the card details");
    } else {
      Axios.post("/confirmOrder", {
        email: localStorage.getItem("loginToken"),
        cardNumber: cardDetails.cardNumber,
        totalAmount: total,
        billingName: name,
        billingPn: pn,
        billingAddress: address,
      });
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

  useEffect(() => {
    if (!localStorage.getItem("loginToken")) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleCardDetailsChange = (e) => {
    setCardDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            <p>
              Total payable amount:
              <span> ₹ {Math.round(total)}</span>
            </p>
            <div className="card-details">
              <input
                type="text"
                value={cardDetails.cardNumber}
                placeholder="Card number"
                name="cardNumber"
                onChange={handleCardDetailsChange}
              ></input>
              <input
                type="text"
                value={cardDetails.cvv}
                placeholder="CVV"
                name="cvv"
                onChange={handleCardDetailsChange}
              ></input>
              <input
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expDate}
                name="expDate"
                onChange={handleCardDetailsChange}
              ></input>
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
