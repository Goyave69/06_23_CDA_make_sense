import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import DecisionResumeIntel from "./DecisionResumeIntel";

export default function DecisionItem() {
  const [data, setData] = useState({});

  const fetchDecisionData = async () => {
    try {
      const response = await axios.get("http://localhost:6001/decisions");
      setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching decision data:", error);
    }
  };

  useEffect(() => {
    fetchDecisionData();
  }, []);

  return (
    <Grid height="100vh" templateColumns="84% 1% 15%" color="#0C3944">
      <GridItem>
        <GridItem mt="4%" marginLeft="15%">
          <Badge
            variant="subtle"
            color="#24673A"
            borderRadius="15"
            bgColor="rgb(36, 103, 58, 0.075 )"
            borderColor="#24673A"
            border="solid"
            fontWeight="500"
            textTransform="none"
            padding="0.25% 0.75% 0.25% 0.75%"
            fontSize="0.8em"
          >
            Décision en cours
          </Badge>
          <Badge
            variant="subtle"
            color="#9B084F"
            borderRadius="15"
            bgColor="rgb(155, 8, 79, 0.075 )"
            borderColor="#9B084F"
            border="solid"
            fontWeight="500"
            textTransform="none"
            marginLeft="0.5%"
            padding="0.25% 0.75% 0.25% 0.75%"
            fontSize="0.8em"
          >
            Hub France
          </Badge>
          <Text fontSize="5xl" fontWeight="800" mt="1.5%">
            {data.title}
          </Text>
          <Stack direction="row" marginBottom="-2%">
            <Stack direction="row" margin="1% 0 2% 0">
              <Avatar name="Jane Doe" size="sm" />
              <Stack direction="row" margin="4% 0 2% 0">
                <Text variant="caption" marginLeft="2%" fontSize="sm">
                  par
                </Text>
                <Text
                  variant="caption"
                  fontWeight="1000"
                  fontSize="sm"
                  margin="0 -20% 0 -2%"
                >
                  Jane Doe
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem mt="2%">
          <Accordion allowToggle marginLeft="15%">
            <AccordionItem borderTop="none">
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Les détails de la décision
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                {data.decision_content}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Impact sur l'organisation
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                {data.organization_utility}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Bénéfices 👍
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                {data.decision_benefits}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Risques potentiels 🚨
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                {data.decision_risks}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Avis 💬
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                tempus urna et pharetra pharetra massa. In egestas erat
                imperdiet sed euismod nisi porta lorem mollis. Rutrum quisque
                non tellus orci ac auctor. Aliquam sem et tortor consequat. Ut
                tellus elementum sagittis vitae et leo duis ut. Nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum.
                Pharetra et ultrices neque ornare. Lacus suspendisse faucibus
                interdum posuere lorem ipsum dolor. Diam donec adipiscing
                tristique risus nec feugiat. Vulputate sapien nec sagittis
                aliquam malesuada bibendum. Nullam ac tortor vitae purus
                faucibus ornare suspendisse sed. Diam vulputate ut pharetra sit
                amet aliquam. Et netus et malesuada fames ac turpis. Faucibus
                ornare suspendisse sed nisi. Mattis ullamcorper velit sed
                ullamcorper. Quam elementum pulvinar etiam non quam lacus
                suspendisse faucibus interdum. Mauris ultrices eros in cursus
                turpis massa tincidunt dui. Elementum tempus egestas sed sed
                risus pretium quam. Et magnis dis parturient montes nascetur
                ridiculus mus mauris. Nec ultrices dui sapien eget. Adipiscing
                elit duis tristique sollicitudin nibh sit amet commodo. Nulla
                facilisi etiam dignissim diam quis. Imperdiet proin fermentum
                leo vel orci porta. Diam vulputate ut pharetra sit amet.
                Ultricies lacus sed turpis tincidunt id aliquet risus.
                Sollicitudin ac orci phasellus egestas tellus. Orci ac auctor
                augue mauris augue neque gravida. Iaculis urna id volutpat
                lacus.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon marginRight="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Première décision
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel pb={4} bgColor="rgb(0 0 0 / 0.020)">
                {data.decision_context}
                <Center>
                  <Button
                    variant="solid"
                    color="white"
                    borderRadius="10"
                    bgColor="#0C3944"
                    textTransform="none"
                    fontWeight="700"
                    textAlign="center"
                    width="25%"
                    mt="5%"
                    _hover={{ bg: "#196C84" }}
                  >
                    Donner mon avis
                  </Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </GridItem>
      <GridItem>
        <Divider orientation="vertical" position="absolute" top="9.5%" />
      </GridItem>
      <GridItem mt="10%">
        <DecisionResumeIntel />
      </GridItem>
    </Grid>
  );
}
