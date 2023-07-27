import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  // Button,
  // Center,
  Text,
} from "@chakra-ui/react";

export default function ExpertPersons() {
  return (
    <Box marginTop="10%">
      <Text fontSize="lg" fontWeight="800">
        Experts
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo">
          <AvatarBadge boxSize="1.1em" bg="#C1E94E" />
        </Avatar>
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
          <AvatarBadge boxSize="1.1em" bg="#C1E94E" />
        </Avatar>
      </AvatarGroup>
      <Text fontSize="sm" fontWeight="700" textDecoration="underline">
        Voir les avis
      </Text>
      {/* <Center>
        <Button
          variant="solid"
          color="white"
          borderRadius="10"
          backgroundColor="#0C3944"
          textTransform="none"
          fontWeight="700"
          textAlign="center"
          width="90%"
          mt="20%"
          padding="3%"
          _hover={{ bg: "#196C84", color: "#C1E94E" }}
        >
          Donner mon avis
        </Button>
      </Center> */}
    </Box>
  );
}
