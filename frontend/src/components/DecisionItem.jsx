import { React, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Chip, Typography } from "@mui/material";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  Center,
} from "@chakra-ui/react";

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
    <Grid marginTop="1%" marginLeft="10%" templateColumns="1fr 1fr" gap={4}>
      <GridItem colSpan={2}>
        <Chip
          variant="outlined"
          color="success"
          size="small"
          label="Décision en cours"
        />
        <Chip
          variant="outlined"
          color="error"
          size="small"
          label="Hub France"
          sx={{ marginLeft: "1%" }}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Typography variant="h3" sx={{ marginY: "1%", fontWeight: "900" }}>
          {data.title}
        </Typography>
      </GridItem>
      <GridItem colSpan={2}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Les détails de la décision
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              {data.decision_content}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Impact sur l'organisation
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              {data.organization_utility}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Bénéfices 👍
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              {data.decision_benefits}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Risques potentiels 🚨
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              {data.decision_risks}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Avis 💬
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Première décision
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
            </h2>
            <AccordionPanel pb={4} backgroundColor="rgb(0 0 0 / 0.015)">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <Center>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#0C3944",
                    textTransform: "none",
                    fontWeight: "900",
                    textAlign: "center",
                    width: "18%",
                  }}
                >
                  Donner son avis
                </Button>
              </Center>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
      <Flex alignItems="flex-start" justifyContent="flex-end">
        <Divider orientation="vertical" />
        <Flex flexDirection="column" marginLeft={4}>
          <Text as="b" fontSize="xl">
            Dates à retenir
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
