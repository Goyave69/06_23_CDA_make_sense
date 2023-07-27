/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./LePoste.css";
import ReactQuill from "react-quill";
import rond from "../../assets/rond.png";
import "react-quill/dist/quill.snow.css";

function LePoste({ onButtonClick, detail, impact }) {
  const modulesRef = {
    toolbar: [
      ["bold", "italic", "link", "image"],
      [{ header: [1, 2, 3, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }],
      ["clean"],
    ],
  };

  const [detailForm, setDetailForm] = detail;
  const [impactForm, setImpactForm] = impact;

  const handleChangeDetail = (content, delta, source, editor) => {
    setDetailForm(editor.getContents());
  };

  const handleChangeImpact = (content, delta, source, editor) => {
    setImpactForm(editor.getContents());
  };

  return (
    <div className="Poste-area">
      <div className="area-left">
        <div className="haeder-poste">
          <img className="imgRond" src={rond} alt="rond" />
          <h1>Le poste</h1>
        </div>
        <h4 className="p-haeder">
          C'est le moment d'être créatif : parlez de votre mission, de l'impact
          direct ou indirect de ce poste, des jalons que vous avez déjà atteints
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
                Titre de la décision *
              </label>
              <input
                className="input-form"
                type="text"
                name="Titre-annonce"
                id="Titre-annonce"
                placeholder="Super job à Paris..."
              />
            </div>

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
                Les détails de la décision *
              </label>
              <br />
              <br />

              <ReactQuill
                value={detailForm}
                onChange={handleChangeDetail}
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
                Impact sur l'organisation *
              </label>
              <br />
              <br />
              <ReactQuill
                value={impactForm}
                onChange={handleChangeImpact}
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
                value="Suivant"
                onClick={() => onButtonClick("Candidater")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LePoste;
