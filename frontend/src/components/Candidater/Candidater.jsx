import React from "react";
import "./Candidater.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import rond from "../../assets/rond.png";

function Candidater({ onButtonClick, benefice, risk }) {
  const modulesRef = {
    toolbar: [
      ["bold", "italic", "link", "image"],
      [{ header: [1, 2, 3, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }],
      ["clean"],
    ],
  };

  const [beneficeForm, setBeneficeForm] = benefice;
  const [risqueForm, setRisqueForm] = risk;

  const handleChangeBenefice = (content, delta, source, editor) => {
    setBeneficeForm(editor.getContents());
  };

  const handleChangeRisque = (content, delta, source, editor) => {
    setRisqueForm(editor.getContents());
  };

  return (
    <div className="Poste-area">
      <div className="area-left">
        <div className="haeder-poste">
          <img className="imgRond" src={rond} alt="rond" />
          <h1>Candidater</h1>
        </div>
        <h4 className="p-haeder">
          C'est le moment d'etre creatif: parlez de votre mission, de l'impact
          direct ou indirect de ce poste, des jalons que vous avez deja atteints
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
                Bénéfices *
              </label>
              <br />
              <br />

              <ReactQuill
                value={beneficeForm}
                onChange={handleChangeBenefice}
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
                Risques potentiels *
              </label>
              <br />
              <br />
              <ReactQuill
                value={risqueForm}
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
                value="Suivant !"
                onClick={() => onButtonClick("Reglages")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Candidater;
