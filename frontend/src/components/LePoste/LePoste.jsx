import React from "react";
import "./LePoste.css";
import rond from "../../assets/rond.png";
import TextEditor from "../../components/TextEditor";

const LePoste = ({ onButtonClick }) => {
  return (
    <div className="Poste-area">
      <div className="area-left">
        <div className="haeder-poste">
          <img className="imgRond" src={rond} alt="rond" />
          <h1>Le poste</h1>
        </div>
        <h4 className="p-haeder">
          C'est le moment d'etre creatif: parlez de votre mission, de l'impact
          direct ou indirect de ce poste, des jalons que vous avez deja atteints
        </h4>
      </div>
      <div className="area-right">
        <div>
          <form className="measure">
            <div className="mt3">
              <label
                htmlFor="Titre-annonce"
                style={{
                  textAlign: "left",
                  color: "rgb(190, 190, 190)",
                  fontSize: "18px",
                }}
              >
                Titre de l'annonce *
              </label>
              <input
                className="input-form"
                type="text"
                name="Titre-annonce"
                id="Titre-annonce"
                placeholder="Super job à Paris..."
              />
            </div>
            <br />
            <div className="mv3">
              <label
                className="db lh-copy f6 mb1"
                htmlFor="descriptif"
                style={{
                  textAlign: "left",
                  color: "rgb(190, 190, 190)",
                  fontSize: "18px",
                }}
              >
                Descriptif de l'offre *
              </label>
              <br />
              <br />
              <TextEditor />
            </div>
            <br />
            <div>
              <br />
              <label
                className="db lh-copy f6 mb1"
                htmlFor="Profil-recherche"
                style={{
                  textAlign: "left",
                  color: "rgb(190, 190, 190)",
                  fontSize: "18px",
                }}
              >
                Profil recherché *
              </label>
              <br />
              <br />
              <TextEditor />
            </div>
            <br />
            <div>
              <input
                style={{
                  borderStyle: "none",
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#9b084f",
                  borderRadius: "10px",
                }}
                type="submit"
                value="Create Workspace"
                onClick={() => onButtonClick("Candidater")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LePoste;
