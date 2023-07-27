import React from "react";
import { Text } from "@chakra-ui/react";
import DecisionStepper from "./DecisionStepper";
import ImpactedPersons from "./ImpactedPersons";
import ExpertPersons from "./ExpertPersons";

export default function DecisionResumeIntel({ status }) {
  console.warn(status);
  return (
    <>
      <Text fontSize="xl" fontWeight="800">
        Important deadlines
      </Text>
      <DecisionStepper status={status} />
      <ImpactedPersons />
      <ExpertPersons />
    </>
  );
}
