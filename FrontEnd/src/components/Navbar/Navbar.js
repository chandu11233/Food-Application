import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { foodstore } from "../../App";
import "./navbar.css";

const Navbar = () => {
  const { cart } = useContext(foodstore);
  const [length, setLength] = useState(0);
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setLength(cart.length);
  }, [cart]);
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    };
    checkToken();
  }, [pathname]);
  return (
    <div className="nav-bar">
      <div className="nav-items">
        <div className="logo">
          <Link to="/home">Express Delivery</Link>
        </div>
        <div className="nav-link">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/manageOrder">
            My Cart<span className="count-number">{length}</span>
          </NavLink>
          {isLoggedIn ? (
            <NavLink
            to={"/signin"}
              onClick={() => {
                localStorage.removeItem("loginToken");
              }}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink to="/signin">Sign in/Sign up</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
