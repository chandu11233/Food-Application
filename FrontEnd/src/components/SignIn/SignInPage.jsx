import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/signin", userData).then((resp) => {
      console.log(resp.data);
      if (resp.data.status === '200') navigate("/home");
      else alert(resp.data.message);
    });
  };
  return (
    <div className="sign-in-container">
      <div className="sign-in-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={inputChangeHandler}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={inputChangeHandler}
            placeholder="Enter password"
          />
          <div className="buttons">
            <button type="submit">sign in</button>
            <p className="login-text">Don't have an account?</p>
            <button onClick={() => navigate("/signup")}>
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
