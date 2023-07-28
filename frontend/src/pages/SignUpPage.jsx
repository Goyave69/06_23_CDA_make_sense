import { React, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";

export default function SignUpPage() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputBirthdate, setInputBirthdate] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

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
      <div
        className="center"
        style={{
          color: "#0C3944",
          height: "93%",
        }}
      >
        <h1 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: "5%" }}>
          Enregistrement
        </h1>
        <form method="post" onSubmit={handleSubmit} style={{ padding: "0 8%" }}>
          <div className="txt_field" style={{ marginTop: 0 }}>
            <span />
            <label htmlFor="InputFirstname" style={{ fontWeight: 700 }}>
              {" "}
              Prénom{"* "}
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
          <div className="txt_field" style={{ marginTop: 0 }}>
            <span />
            <label htmlFor="InputLastname" style={{ fontWeight: 700 }}>
              {" "}
              Nom{"* "}
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
          <div className="txt_field" style={{ marginTop: 0 }}>
            <span />
            <label htmlFor="InputBirthdate" style={{ fontWeight: 700 }}>
              {" "}
              Date de naissance{"* "}
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
          <div className="txt_field" style={{ marginTop: 0 }}>
            <span />
            <label htmlFor="InputEmail" style={{ fontWeight: 700 }}>
              {" "}
              E-mail{"* "}
            </label>
            <input
              type="text"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              name="InputEmail"
              placeholder="goyave.lebrave@oasis.com"
              required
              style={{ marginBottom: 0 }}
            />
          </div>
          <div className="txt_field" style={{ marginTop: 0 }}>
            <span />
            <label htmlFor="InputPassword" style={{ fontWeight: 700 }}>
              Mot de passe*
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
            value="Créer votre compte"
            href="http://localhost:3000/"
            onClick={() =>
              toast({
                title: "Compte créé",
                description: "Bienvenue chez vous!",
                status: "success",
                duration: 3000,
              })
            }
            style={{
              fontWeight: 900,
              backgroundColor: "#0C3944",
              margin: "2.5% 10% 5% 10%",
            }}
          />
        </form>
      </div>
    </div>
  );
}
