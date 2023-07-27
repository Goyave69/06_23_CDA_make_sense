import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ApiHelper from "../services/ApiHelper";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [, setCookies] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    ApiHelper(
      "login",
      "post",
      {
        email: inputEmail,
        password: inputPassword,
      },
      "application/json"
    )
      .then((response) => {
        console.info(response.data);
        setCookies("token", response.data);
        navigate("/my-decisions");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <div className="center" style={{ color: "#0C3944" }}>
        <h1 style={{ fontWeight: 900, fontSize: "2rem" }}>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <span />
            <label htmlFor="InputEmail"> Email </label>
            <input
              type="text"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              name="InputEmail"
              placeholder="trace.laglace@coolrasta.com"
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
            Not a member? <a href="Test">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
