import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useToast } from "@chakra-ui/react";
import ApiHelper from "../services/ApiHelper";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [, setCookies] = useCookies();
  const navigate = useNavigate();
  const toast = useToast();

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
        toast({
          title: "Conexion réussie",
          description: "Bon retour parmi nous!",
          status: "success",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <div className="center" style={{ color: "#0C3944" }}>
        <h1 style={{ fontWeight: 900, fontSize: "2rem" }}>Connexion</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <span />
            <label htmlFor="InputEmail"> E-mail </label>
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
            <label htmlFor="InputPassword">Mot de passe</label>
            <input
              type="password"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              name="InputPassword"
              placeholder="●●●●●●●●●"
              required
            />
          </div>
          <div className="pass">Mot de passe oublié?</div>
          <input type="submit" value="Se connecter" />
          <div className="signup_link">
            Vous n'êtes pas membre? <a href="signup">Enregistrez-vous</a>
          </div>
        </form>
      </div>
    </div>
  );
}
