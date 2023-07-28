/* eslint-disable camelcase */
import React from "react";
import { Text } from "@chakra-ui/react";
import DecisionStepper from "./DecisionStepper";
import ImpactedPersons from "./ImpactedPersons";
import ExpertPersons from "./ExpertPersons";

export default function DecisionResumeIntel({ status: { progress_status } }) {
  console.warn(progress_status);
  return (
    <>
      <Text fontSize="xl" fontWeight="800">
        Dates à retenir
      </Text>
      <DecisionStepper status={progress_status} />
      <ImpactedPersons />
      <ExpertPersons />
    </>
  );
}
