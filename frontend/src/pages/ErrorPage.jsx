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
      height="92.5vh"
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
        <Text fontWeight="800">It doesn't</Text>
        <Text fontWeight="1000">make_sense</Text>
        <Text fontWeight="800">you're here!!!</Text>
      </Box>
      <Box height="50vh" fontSize="5xl">
        <Text textAlign="center" fontWeight="800">
          Let's go back to{" "}
          <Link as={ReachLink} to="/my-decisions" color="#196C84">
            your decisions
          </Link>{" "}
          or{" "}
          <Link as={ReachLink} to="/" color="#196C84">
            login
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
