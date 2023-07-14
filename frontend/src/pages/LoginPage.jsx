// import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ApiHelper from "../services/ApiHelper";

export default function LoginPage() {
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [, setCookies] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    ApiHelper(
      "login",
      "post",
      {
        email: inputUsername,
        password: inputPassword,
      },
      "application/json"
    )
      .then((response) => {
        console.info(response.data);
        setCookies("token", response.data);
        navigate("/decision");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <span />
            <label htmlFor="InputUsername"> Username </label>
            <input
              type="text"
              onChange={(e) => setInputUsername(e.target.value)}
              value={inputUsername}
              name="InputUsername"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>
          <div className="txt_field">
            <span />
            <label htmlFor="InputPassword">Password</label>
            <input
              type="password"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              name="InputPassword"
              placeholder="●●●●●●●●●"
              required
            />
          </div>
          <div className="pass">Forgot Password?</div>
          <input
            type="submit"
            value="Login"
            href="http://localhost:3000/decision"
          />
          <div className="signup_link">
            Not a member? <a href="Test">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
