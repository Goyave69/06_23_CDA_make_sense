import React from "react";

import { Avatar, AvatarBadge, AvatarGroup, Box, Text } from "@chakra-ui/react";

export default function ImpactedPersons() {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="800">
        Personnes impactées
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
          <AvatarBadge boxSize="1.1em" bg="#F3976B" />
        </Avatar>
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba">
          <AvatarBadge boxSize="1.1em" bg="#C1E94E" />
        </Avatar>
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast">
          <AvatarBadge boxSize="1.1em" bg="#C62E43" />
        </Avatar>
      </AvatarGroup>
      <Text fontSize="sm" fontWeight="700" textDecoration="underline">
        Voir les avis
      </Text>
    </Box>
  );
}
