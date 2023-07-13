import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";

export default function SignUpPage() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputBirthdate, setInputBirthdate] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    ApiHelper(
      "users",
      "post",
      {
        firstname: inputFirstname,
        lastname: inputLastname,
        birthdate: inputBirthdate,
        email: inputEmail,
        password: inputPassword,
        role: { user: "user" },
      },
      "application/json"
    )
      .then((response) => {
        console.info(response.data);
        navigate("/decision");
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main" style={{ backgroundColor: "#9B084F" }}>
      <div className="center" style={{ paddingBottom: "3%", color: "#0C3944" }}>
        <h1 style={{ fontWeight: 900, fontSize: "2rem" }}>Sign Up</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <span />
            <label htmlFor="InputFirstname" style={{ fontWeight: 700 }}>
              {" "}
              Firstname{" "}
            </label>
            <input
              type="text"
              onChange={(e) => setInputFirstname(e.target.value)}
              value={inputFirstname}
              name="InputFirstname"
              placeholder="Goyave"
              required
            />
          </div>
          <div className="txt_field">
            <span />
            <label htmlFor="InputLastname" style={{ fontWeight: 700 }}>
              {" "}
              Lastname{" "}
            </label>
            <input
              type="text"
              onChange={(e) => setInputLastname(e.target.value)}
              value={inputLastname}
              name="InputLastname"
              placeholder="Lebrave"
              required
            />
          </div>
          <div className="txt_field">
            <span />
            <label htmlFor="InputBirthdate" style={{ fontWeight: 700 }}>
              {" "}
              Birthdate{" "}
            </label>
            <input
              type="date"
              onChange={(e) => setInputBirthdate(e.target.value)}
              value={inputBirthdate}
              name="InputBirthdate"
              placeholder="08/05/1985"
              required
            />
          </div>
          <div className="txt_field">
            <span />
            <label htmlFor="InputEmail" style={{ fontWeight: 700 }}>
              {" "}
              Email{" "}
            </label>
            <input
              type="text"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              name="InputEmail"
              placeholder="goyave.lebrave@oasis.com"
              required
            />
          </div>
          <div className="txt_field">
            <span />
            <label htmlFor="InputPassword" style={{ fontWeight: 700 }}>
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              name="InputPassword"
              placeholder="●●●●●●●●●"
              required
            />
          </div>
          <input
            type="submit"
            value="Create Account"
            href="http://localhost:3000/decision"
            style={{
              fontWeight: 900,
              backgroundColor: "#0C3944",
              marginTop: "5%",
            }}
          />
        </form>
      </div>
    </div>
  );
}
