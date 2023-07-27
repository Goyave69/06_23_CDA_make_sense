import React from "react";
import "./Reglages.css";
import ReactQuill from "react-quill";
import rond from "../../assets/rond.png";
import "react-quill/dist/quill.snow.css";

function Reglages({ decision, concerner, handleSend }) {
  const modulesRef = {
    toolbar: [
      ["bold", "italic", "link", "image"],
      [{ header: [1, 2, 3, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }],
      ["clean"],
    ],
  };

  const [decisionForm, setDecisionForm] = decision;
  const [concernerForm, setConcernerForm] = concerner;

  const handleChangeDecision = (content, delta, source, editor) => {
    setDecisionForm(editor.getContents());
  };

  const handleChangeRisque = (content, delta, source, editor) => {
    setConcernerForm(editor.getContents());
  };

  return (
    <div className="Poste-area">
      <div className="area-left">
        <div className="haeder-poste">
          <img className="imgRond" src={rond} alt="rond" />
          <h1>Réglages</h1>
        </div>
        <h4 className="p-haeder">
          C'est le moment d'être créatif: parlez de votre mission, de l'impact
          direct ou indirect de ce poste, des jalons que vous avez déjà atteints
        </h4>
      </div>
      <div className="area-right">
        <div>
          <form className="measure">
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
                Première décision *
              </label>
              <br />
              <br />

              <ReactQuill
                value={decisionForm}
                onChange={handleChangeDecision}
                modules={modulesRef}
                theme="snow"
              />
            </div>
            <br />
            <div>
              <label
                className="db lh-copy f6 mb1"
                htmlFor="Profil-recherche"
                style={{
                  textAlign: "left",
                  color: "rgb(190, 190, 190)",
                  fontSize: "18px",
                }}
              >
                Personnes concernées *
              </label>
              <br />
              <br />
              <ReactQuill
                value={concernerForm}
                onChange={handleChangeRisque}
                modules={modulesRef}
                theme="snow"
              />
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
                value="Création de la décision"
                onClick={handleSend}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reglages;
