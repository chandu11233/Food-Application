import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/signup", userData).then((resp) => {
      console.log(resp.data);
      if (resp.data.status === '200') navigate("/home");
      else alert("Email already exists.");
    });
  };
  return (
    <div className="sign-up-container">
      <div className="sign-up-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={inputChangeHandler}
            placeholder="Enter name"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={inputChangeHandler}
            placeholder="Enter email"
          />
          <input
            type="text"
            name="mobile"
            value={userData.mobile}
            onChange={inputChangeHandler}
            placeholder="Enter mobile number"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={inputChangeHandler}
            placeholder="Create your password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={inputChangeHandler}
            placeholder="Confirm your password"
          />
          <div className="buttons">
            <button type="submit">sign up</button>
            <p className="login-text">Already have an account?</p>
            <button onClick={() => navigate("/signin")}>sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
