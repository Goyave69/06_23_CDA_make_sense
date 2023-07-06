import React from "react";
import { Button } from "@mui/material";
import { Avatar, AvatarGroup, Box, Center, Text } from "@chakra-ui/react";

export default function ExpertPersons() {
  return (
    <Box marginTop="10%">
      <Text as="bold" fontSize="xl" fontWeight="900">
        Personnes expertes
      </Text>
      <AvatarGroup size="md" max={5} marginY="10%">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      <Text fontSize="md" fontWeight="900" textDecoration="underline">
        Voir les avis
      </Text>
      <Center>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            backgroundColor: "#0C3944",
            textTransform: "none",
            fontWeight: "900",
            textAlign: "center",
            width: "90%",
            marginTop: "20%",
          }}
        >
          Donner son avis
        </Button>
      </Center>
    </Box>
  );
}
