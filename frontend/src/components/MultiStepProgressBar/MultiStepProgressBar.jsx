import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import fleche from "../../assets/fleche.png";

function MultiStepProgressBar({ page, onPageNumberClick }) {
  let stepPercentage = 0;
  if (page === "LePoste") {
    stepPercentage = 16;
  } else if (page === "Candidater") {
    stepPercentage = 50;
  } else if (page === "Reglages") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar className="allBar" percent={stepPercentage}>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
            onKeyDown={() => onPageNumberClick("1")}
            role="button"
            tabIndex="0"
          >
            1. Le Poste
          </div>
        )}
      </Step>
      <div>
        <img className="fleche1" src={fleche} alt="fleche1" />
      </div>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
            onKeyDown={() => onPageNumberClick("2")}
            role="button"
            tabIndex="0"
          >
            {"2. Candidater "}
          </div>
        )}
      </Step>
      <div>
        <img className="fleche2" src={fleche} alt="fleche2" />
      </div>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
            onKeyDown={() => onPageNumberClick("3")}
            role="button"
            tabIndex="0"
          >
            3. Reglages
          </div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default MultiStepProgressBar;
