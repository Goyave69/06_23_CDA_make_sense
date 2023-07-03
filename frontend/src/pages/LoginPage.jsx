import { React, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

export default function LoginPage() {
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8888/login", {
        email: inputUsername,
        password: inputPassword,
      })
      .then((response) => {
        console.info(response.data);
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
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="Test">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
