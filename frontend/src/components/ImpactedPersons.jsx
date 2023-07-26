import React from "react";

import { Avatar, AvatarGroup, Box, Text } from "@chakra-ui/react";

export default function ImpactedPersons() {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="800">
        Personnes impactées
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      <Text fontSize="md" fontWeight="700" textDecoration="underline">
        Voir les avis
      </Text>
    </Box>
  );
}
