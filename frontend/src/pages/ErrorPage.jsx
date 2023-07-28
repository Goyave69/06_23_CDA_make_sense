import { Box, Link, Text } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import "../styles/ErrorPage.css";

export default function ErrorPage() {
  return (
    <Box
      className="main-container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="#0C3944"
      height="100vh"
      gap={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-end"
        gap={4}
        height="50vh"
        fontSize="5xl"
      >
        <Text fontWeight="800">Vous êtes là?</Text>
        <Text fontWeight="800">Ça ne</Text>
        <Text fontWeight="1000">fait pas sens...</Text>
      </Box>
      <Box height="50vh" fontSize="5xl">
        <Text textAlign="center" fontWeight="800">
          Retournez vers{" "}
          <Link as={ReachLink} to="/my-decisions" color="#196C84">
            vos décisions
          </Link>{" "}
          ou{" "}
          <Link as={ReachLink} to="/login" color="#196C84">
            connectez-vous
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
