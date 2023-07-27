import React from "react";

import { Avatar, AvatarBadge, AvatarGroup, Box, Text } from "@chakra-ui/react";

export default function ImpactedPersons() {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="800">
        Impacted people
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
          <AvatarBadge boxSize="1.1em" bg="#FCF6A0" borderColor="#24673A" />
        </Avatar>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast">
          <AvatarBadge boxSize="1.1em" bg="#FCF6A0" borderColor="#24673A" />
        </Avatar>
      </AvatarGroup>
      <Text fontSize="md" fontWeight="700" textDecoration="underline">
        See surveys
      </Text>
    </Box>
  );
}
