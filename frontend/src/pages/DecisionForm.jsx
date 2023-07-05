import React, { useState } from "react";
import MultiStepProgressBar from "../components/MultiStepProgressBar/MultiStepProgressBar";
import "../styles/DecisionForm.css";
import LePoste from "../components/LePoste/LePoste";
import Candidater from "../components/Candidater/Candidater";
import Reglages from "../components/Reglages/Reglages";

function DecisionForm() {
  const [page, setPage] = useState("LePoste");

  const nextPage = (newpage) => {
    setPage(newpage);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("LePoste");
        break;
      case "2":
        setPage("Candidater");
        break;
      case "3":
        setPage("Reglages");
        break;
      default:
        setPage("1");
    }
  };
  return (
    <div className="all-area">
      <div className="title-poste">
        <h1 className="titleposte">
          Créer une nouvelle annonce: makesense France
        </h1>
      </div>
      <div>
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />

        {
          {
            LePoste: <LePoste onButtonClick={nextPage} />,
            Candidater: <Candidater onButtonClick={nextPage} />,
            Reglages: <Reglages />,
          }[page]
        }
      </div>
    </div>
  );
}

export default DecisionForm;
