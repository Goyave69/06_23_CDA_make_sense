import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import ApiHelper from "../services/ApiHelper";
import loadData from "../services/loadData";
import getCookie from "../services/CookieHelper";

import DecisionResumeIntel from "../components/DecisionResumeIntel";

export default function NewDecision() {
  const [decision, setDecision] = useState({});
  const [survey, setSurvey] = useState([]);
  const [comment, setComment] = useState();
  const { id } = useParams();

  const token = JSON.parse(getCookie("user").split("").splice(2).join(""));
  const userId = token.id;
  const userFirstname = token.firstname;
  const userLastname = token.lastname;

  const userRole = token.role;

  let decisionStatus = decision.progress_status;

  const updateStatus = () => {
    decisionStatus += 1;
  };

  const editedData = {
    progress_status: decisionStatus,
  };

  const handleUpdateStatus = (dataId = "") => {
    updateStatus();
    ApiHelper(`decisions/${dataId}`, "put", JSON.stringify(editedData)).then(
      loadData(`decisions/${dataId}`, setDecision)
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:6001/decisions/${id}`)
      .then((response) => {
        setDecision(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:6001/decisionSurvey/${id}`)
      .then((response) => {
        setSurvey(response.data);
        console.warn(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    ApiHelper(
      "surveys",
      "post",
      {
        decision_id: id,
        comment_content: comment,
        makesense_user_id: userId,
      },
      "application/json"
    )
      .then((response) => {
        console.warn(response);
        loadData(`decisionSurvey/${id}`, setSurvey);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.warn(survey.comment_content);

  return (
    <Grid height="92.5vh" templateColumns="82% 1% 17%" color="#0C3944">
      <GridItem>
        <GridItem mt="4%" ml="15%">
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
            ml="0.5%"
            padding="0.25% 0.75% 0.25% 0.75%"
            fontSize="0.8em"
          >
            Hub France
          </Badge>
          <Text fontSize="5xl" fontWeight="800" mt="1.5%">
            {decision.title}
          </Text>
          <Stack direction="row" marginBottom="-2%">
            <Stack direction="row" margin="1% 0 2% 0">
              <Avatar name={`${userFirstname} ${userLastname}`} size="sm" />
              <Stack direction="row" margin="4% 0 2% 0">
                <Text variant="caption" ml="2%" fontSize="sm">
                  par
                </Text>
                <Text
                  variant="caption"
                  fontWeight="1000"
                  fontSize="sm"
                  margin="0 -20% 0 -2%"
                >
                  {userFirstname} {userLastname}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem mt="2%">
          <Accordion allowToggle ml="15%">
            <AccordionItem borderTop="none">
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "rgb(0 0 0 / 0.020)",
                    color: "rgb(155, 8, 79)",
                  }}
                >
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Les détails de la décision
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {decision.decision_content}
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
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Impact sur l'organisation
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {decision.organization_utility}
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
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Bénéfices 👍
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {decision.decision_benefits}
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
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Risques potentiels 🚨
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {decision.decision_risks}
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
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Première décision
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {decision.decision_context}
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
                  <AccordionIcon mr="1%" />
                  <Box as="span" flex="1" textAlign="left" fontWeight="1000">
                    Avis 💬
                  </Box>
                </AccordionButton>
                <Divider />
              </h2>
              <AccordionPanel
                bgColor="rgb(0 0 0 / 0.020)"
                px={10}
                py={5}
                textAlign="justify"
                textIndent={20}
              >
                {survey.map((item) => (
                  <GridItem
                    gap={4}
                    display="flex"
                    flexDirection={item.Id % 2 === 0 ? "row" : "row-reverse"}
                  >
                    <Text
                      key={item.Id}
                      display="flex"
                      bgColor="rgb(193, 233, 78, 0.65)"
                      borderRadius={
                        item.Id % 2 === 0
                          ? "1.125em 1.125em 1.125em 0"
                          : "1.125em 1.125em 0 1.125em"
                      }
                      border="1px solid #C1E94E"
                      flexDirection={item.Id % 2 === 0 ? "row" : "row-reverse"}
                      width="26%"
                      my={4}
                      px={5}
                      py={2.5}
                      textAlign="justify"
                    >
                      {item.comment_content}
                    </Text>
                  </GridItem>
                ))}
                <Input
                  mt="2.5%"
                  variant="filled"
                  placeholder="Écrivez votre avis ici..."
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  _focusWithin="#0C3944"
                />
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
                    mt="2.5%"
                    _hover={{ bg: "#196C84", color: "#C1E94E" }}
                    onClick={handleSurveySubmit}
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
        <DecisionResumeIntel status={editedData} />
      </GridItem>
      <GridItem>
        {userRole === "ROLE_EXPERT" && (
          <Button onClick={() => handleUpdateStatus(decision.id)}>Step+</Button>
        )}
      </GridItem>
    </Grid>
  );
}
