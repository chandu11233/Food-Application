import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card"
      onClick={() => {
        if(props.clickable) navigate("/order")
      }}
    >
      <img className="image" src={props.product.img} alt="food" />
      <div>
        <h2>{props.product.name}</h2>
        <p>{props.product.description}</p>
        <div className="flex">{props.children}</div>
      </div>
    </div>
  );
};

export default Product;
