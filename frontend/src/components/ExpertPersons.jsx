import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";

export default function ExpertPersons() {
  return (
    <Box marginTop="10%">
      <Text fontSize="xl" fontWeight="800">
        Experts
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      <Text fontSize="md" fontWeight="700" textDecoration="underline">
        See surveys
      </Text>
      <Center>
        <Button
          variant="solid"
          color="white"
          borderRadius="10"
          backgroundColor="#0C3944"
          textTransform="none"
          fontWeight="700"
          textAlign="center"
          width="90%"
          marginTop="20%"
          _hover={{ bg: "#196C84" }}
        >
          Post my survey
        </Button>
      </Center>
    </Box>
  );
}
