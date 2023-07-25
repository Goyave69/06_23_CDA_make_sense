import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiStepProgressBar from "../components/MultiStepProgressBar/MultiStepProgressBar";
import "../styles/DecisionForm.css";
import LePoste from "../components/LePoste/LePoste";
import Candidater from "../components/Candidater/Candidater";
import Reglages from "../components/Reglages/Reglages";
import ApiHelper from "../services/ApiHelper";

function DecisionForm() {
  const [page, setPage] = useState("LePoste");

  const [detailForm, setDetailForm] = useState();
  const [impactForm, setImpactForm] = useState("");
  const [beneficeForm, setBeneficeForm] = useState("");
  const [risqueForm, setRisqueForm] = useState("");
  const [decisionForm, setDecisionForm] = useState("");
  const [concernerForm, setConcernerForm] = useState("");

  /// Destructure the state to get the data of the text editor

  const detailResult = detailForm?.ops?.[0]?.insert;
  const impactResult = impactForm?.ops?.[0]?.insert;
  const beneficeResult = beneficeForm?.ops?.[0]?.insert;
  const risqueResult = risqueForm?.ops?.[0]?.insert;
  const decisionResult = decisionForm?.ops?.[0]?.insert;
  const concernerResult = concernerForm?.ops?.[0]?.insert;

  const navigate = useNavigate();

  const handleDecisionSubmit = (e) => {
    e.preventDefault();
    ApiHelper(
      "decisions",
      "post",
      {
        title: "Poste de dev",
        deadline: "2023-09-30",
        decision_content: detailResult,
        organization_utility: impactResult,
        decision_context: decisionResult,
        decisionContent: concernerResult,
        decision_benefits: beneficeResult,
        decision_risks: risqueResult,
        progress_status: "0",
        makesense_user_id: "3",
        in_conflict: false,
      },
      "application/json"
    )
      .then((response) => {
        const resultInsertId = response.data.id;
        navigate(`/decision/${resultInsertId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            LePoste: (
              <LePoste
                onButtonClick={nextPage}
                detail={[detailForm, setDetailForm]}
                impact={[impactForm, setImpactForm]}
              />
            ),
            Candidater: (
              <Candidater
                onButtonClick={nextPage}
                benefice={[beneficeForm, setBeneficeForm]}
                risk={[risqueForm, setRisqueForm]}
              />
            ),
            Reglages: (
              <Reglages
                decision={[decisionForm, setDecisionForm]}
                concerner={[concernerForm, setConcernerForm]}
                handleSend={handleDecisionSubmit}
              />
            ),
          }[page]
        }
      </div>
    </div>
  );
}

export default DecisionForm;
