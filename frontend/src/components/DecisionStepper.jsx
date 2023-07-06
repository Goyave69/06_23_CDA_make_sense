/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "15/10/2022", description: "Prise de décision commencée" },
  { title: "25/10/2022", description: "Deadline pour donner son avis" },
  { title: "10/11/2022", description: "Première décision prise" },
  { title: "17/11/2022", description: "Deadline pour rentrer en conflit" },
  { title: "30/11/2022", description: "Décision définitive" },
];

export default function DecisionStepper() {
  const activeStep = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper
      size="sm"
      colorScheme="green"
      index={activeStep}
      orientation="vertical"
      height="200px"
      gap="0"
      marginY="10%"
    >
      {steps.map((step, index) => (
        <Step key={index} color="#C1E94E">
          <StepIndicator color="#0C3944">
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle color="#0C3944">{step.title}</StepTitle>
            <StepDescription color="#0C3944">
              {step.description}
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
