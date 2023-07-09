import React from "react";
import { Text } from "@chakra-ui/react";

import DecisionStepper from "./DecisionStepper";
import ImpactedPersons from "./ImpactedPersons";
import ExpertPersons from "./ExpertPersons";

export default function DecisionResumeIntel() {
  return (
    <>
      <Text as="bold" fontSize="xl" fontWeight="1000" color="#0C3944">
        Dates à retenir
      </Text>
      <DecisionStepper />
      <ImpactedPersons />
      <ExpertPersons />
    </>
  );
}
