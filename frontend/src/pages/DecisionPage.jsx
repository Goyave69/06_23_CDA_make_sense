/* eslint-disable import/no-extraneous-dependencies */
import { React, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Card,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
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
          All decisions
        </Text>
        <Divider />
      </GridItem>
      {data.map((decision) => (
        <GridItem>
          <Card
            variant="elevated"
            key={decision.id}
            minWidth="260"
            minHeight="170"
            color="#0C3944"
            boxShadow="lg"
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
                fontSize="0.8em"
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
                fontSize="0.8em"
              >
                Hub France
              </Badge>
            </Stack>
            <Text fontSize="2xl" fontWeight="900" margin="5% 0 5% 6%">
              {decision.title}
            </Text>
            <Stack direction="row" spacing={2} position="absolute" bottom="8%">
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
        </GridItem>
      ))}
    </Grid>
  );
}
