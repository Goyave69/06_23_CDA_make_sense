import React from "react";
import "../MultiStepProgressBar/MultiStepProgressBar.css"
import { ProgressBar, Step } from "react-step-progress-bar";
import fleche from "../../assets/fleche.png"
const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
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
          >
            {"1. Le Poste"}
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
          >
            {"3. Reglages"}
          </div>
        )}
      </Step>

   
    </ProgressBar>
  
  );
};

export default MultiStepProgressBar;