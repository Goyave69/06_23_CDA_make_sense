// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import "../styles/PageExpert.css";
import {
  ModalOverlay,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import editer from "../assets/editer.svg";
import poubelle from "../assets/poubelle.svg";
import signet from "../assets/signet.svg";
import signetJaune from "../assets/signetJaune.png";
import ApiHelper from "../services/ApiHelper";
// import loadData from "../services/loadData";

export default function PageExpert() {
  const [favorie, setFavorie] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   loadData("decisions", setData);
  // }, []);

  const toast = useToast();
  const status = ["success"];

  function handleChangeIcon() {
    setFavorie(!favorie);
  }

  // eslint-disable-next-line react/no-unstable-nested-components, react/function-component-definition
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const handleDecisionDelete = (e) => {
    e.preventDefault();
    ApiHelper("decision:id", "delete", "application/json")
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={8}
      color="#0C3944"
      margin="5% 10% 0 5%"
    >
      <GridItem rowSpan={1} colSpan={5} marginBottom="1.5%">
        <Text fontSize="3xl" fontWeight="800" marginBottom="1.5%">
          My decisions
        </Text>
        <Divider />
      </GridItem>
      {/* {data.map((decision) => (
        <GridItem key={decision.id}> */}
      <GridItem>
        <Card
          variant="elevated"
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
              fontSize="0.7em"
            >
              Pending decision
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
              France Hub
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
            Moving outside of Paris in Spring 2023 (late April) and test Milan
          </Text>
          <Stack direction="row" spacing={1} position="absolute" bottom="3%">
            <Avatar name="Jane Doe" marginLeft="10%" size="sm" />

            <Stack direction="row" margin="4% 0 2% 0">
              <Text variant="caption" marginLeft="3%" fontSize="sm">
                by
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

          <div className="button-card">
            <button type="submit">
              <img src={editer} alt="editer" />
            </button>
            <button type="submit" onClick={handleChangeIcon}>
              <img src={favorie ? signetJaune : signet} alt="favorie" />
            </button>
            <button
              type="submit"
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <img src={poubelle} alt="poubelle" />
            </button>
          </div>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Attention !</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Voulez vous vraiment suprimer ce poste de votre Espace
                  d'expert ?
                </Text>
              </ModalBody>
              <ModalFooter gap="10px">
                <Button
                  onClick={() => {
                    toast({
                      title: `${status} toast`,
                      status: "success",
                      isClosable: true,
                    });

                    onClose();
                    handleDecisionDelete();
                  }}
                >
                  Validé
                </Button>
                <Button onClick={onClose}>Annulé</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </GridItem>
      {/* ))} */}

      <GridItem rowSpan={1} colSpan={5} marginTop="40px" marginBottom="1.5%">
        <Text fontSize="3xl" fontWeight="800" marginBottom="1.5%">
          Advice process started
        </Text>
        <Divider />
      </GridItem>
      <GridItem>
        <Card
          variant="elevated"
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
              fontSize="0.7em"
            >
              Pending decision
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
              France Hub
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
            Moving outside of Paris in Spring 2023 (late April) and test Milan
          </Text>
          <Stack direction="row" spacing={1} position="absolute" bottom="3%">
            <Avatar name="Jane Doe" marginLeft="10%" size="sm" />

            <Stack direction="row" margin="4% 0 2% 0">
              <Text variant="caption" marginLeft="3%" fontSize="sm">
                by
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
          <div className="button-card">
            <button type="submit">
              <img src={editer} alt="editer" />
            </button>
            <button type="submit" onClick={handleChangeIcon}>
              <img src={favorie ? signetJaune : signet} alt="favorie" />
            </button>
            <button
              type="submit"
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <img src={poubelle} alt="poubelle" />
            </button>
          </div>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Attention !</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Voulez vous vraiment suprimer ce poste de votre Espace
                  d'expert ?
                </Text>
              </ModalBody>
              <ModalFooter gap="10px">
                <Button
                  onClick={() => {
                    toast({
                      title: `${status} toast`,
                      status: "success",
                      isClosable: true,
                    });

                    onClose();
                    handleDecisionDelete();
                  }}
                >
                  Validé
                </Button>
                <Button onClick={onClose}>Annulé</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="elevated"
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
              fontSize="0.7em"
            >
              Pending decision
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
              France Hub
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
            Moving outside of Paris in Spring 2023 (late April) and test Milan
          </Text>
          <Stack direction="row" spacing={1} position="absolute" bottom="3%">
            <Avatar name="Jane Doe" marginLeft="10%" size="sm" />

            <Stack direction="row" margin="4% 0 2% 0">
              <Text variant="caption" marginLeft="3%" fontSize="sm">
                by
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
          <div className="button-card">
            <button type="submit">
              <img src={editer} alt="editer" />
            </button>
            <button type="submit" onClick={handleChangeIcon}>
              <img src={favorie ? signetJaune : signet} alt="favorie" />
            </button>
            <button
              type="submit"
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <img src={poubelle} alt="poubelle" />
            </button>
          </div>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Attention !</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Voulez vous vraiment suprimer ce poste de votre Espace
                  d'expert ?
                </Text>
              </ModalBody>
              <ModalFooter gap="10px">
                <Button
                  onClick={() => {
                    toast({
                      title: `${status} toast`,
                      status: "success",
                      isClosable: true,
                    });

                    onClose();
                    handleDecisionDelete();
                  }}
                >
                  Validé
                </Button>
                <Button onClick={onClose}>Annulé</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </GridItem>
    </Grid>
  );
}
