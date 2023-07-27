import { React, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Card,
  Divider,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import loadData from "../services/loadData";

export default function DecisionPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("decisions", setData);
  }, []);

  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      color="#0C3944"
      margin="5% 0 0 5%"
    >
      <GridItem rowSpan={1} colSpan={5} marginBottom="1.5%">
        <Text fontSize="3xl" fontWeight="800" marginBottom="1.5%">
          Toutes les décisions
        </Text>
        <Divider />
      </GridItem>
      {data.map((decision) => (
        <GridItem key={decision.id}>
          <LinkBox>
            <Card
              variant="elevated"
              minWidth="260"
              minHeight="170"
              color="#0C3944"
              boxShadow="lg"
              _hover={{
                boxShadow: "2xl",
                color: "#196C84",
                border: "1px solid #C1E94E",
              }}
            >
              <Stack direction="row" spacing={2} margin="6% 0 0 6%">
                <Badge
                  variant="subtle"
                  color="#24673A"
                  borderRadius="15"
                  backgroundColor="rgb(36, 103, 58, 0.075 )"
                  borderColor="#24673A"
                  border="solid"
                  fontWeight="500"
                  textTransform="none"
                  padding="1% 2% 1% 2%"
                  fontSize="0.7em"
                >
                  Décision en cours
                </Badge>
                <Badge
                  variant="subtle"
                  color="#9B084F"
                  borderRadius="15"
                  backgroundColor="rgb(155, 8, 79, 0.075 )"
                  borderColor="#9B084F"
                  border="solid"
                  fontWeight="500"
                  textTransform="none"
                  padding="1% 2% 1% 2%"
                  fontSize="0.7em"
                >
                  Hub France
                </Badge>
              </Stack>
              <Text
                display="flex"
                fontSize="0.99em"
                fontWeight="900"
                textAlign="justify"
                margin="5%"
                noOfLines={3}
              >
                <LinkOverlay as={ReachLink} to={`${decision.id}`}>
                  {decision.title}
                </LinkOverlay>
              </Text>
              <Stack
                direction="row"
                spacing={1}
                position="absolute"
                bottom="8%"
              >
                <Avatar name="Jane Doe" marginLeft="10%" size="sm" />

                <Stack direction="row" margin="4% 0 2% 0">
                  <Text variant="caption" marginLeft="3%" fontSize="sm">
                    par
                  </Text>
                  <Text
                    variant="caption"
                    color="#0C3944"
                    fontWeight="1000"
                    fontSize="sm"
                    margin="0 -20% 0 -2%"
                  >
                    Jane Doe
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </LinkBox>
        </GridItem>
      ))}
    </Grid>
  );
}
