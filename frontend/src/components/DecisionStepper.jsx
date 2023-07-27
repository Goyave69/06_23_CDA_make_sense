import React, { useState, useEffect } from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

const steps = [
  { step: 0, title: "15/10/2022", description: "Prise de décision commencée" },
  {
    step: 1,
    title: "25/10/2022",
    description: "Deadline pour donner son avis",
  },
  { step: 2, title: "10/11/2022", description: "Première décision prise" },
  {
    step: 3,
    title: "17/11/2022",
    description: "Deadline pour rentrer en conflit",
  },
  { step: 4, title: "30/11/2022", description: "Décision définitive" },
];

export default function DecisionStepper({ status }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Trouver l'index de l'étape qui est = à progress_status
    const activeStepIndex = steps.findIndex((step) => step.step === status);

    setActiveStep(activeStepIndex);
  }, [status]);

  return (
    <Stepper
      size="xs"
      colorScheme="orange"
      index={activeStep}
      orientation="vertical"
      height="200px"
      gap="0"
      marginY="10%"
    >
      {steps.map((step) => (
        <Step key={step.step}>
          {/* Apply green color for the active step and red color for the rest */}
          <StepIndicator bg={step.step === activeStep ? "green" : "red"} />
          <Box flexShrink="0">
            <StepTitle color={step.step === activeStep ? "green" : "#0C3944"}>
              {step.title}
            </StepTitle>
            <StepDescription
              color={step.step === activeStep ? "green" : "#0C3944"}
            >
              {step.description}
            </StepDescription>
            <StepSeparator
              bg={step.step === activeStep ? "green" : "#C1E94E"}
            />
          </Box>
        </Step>
      ))}
    </Stepper>
  );
}
