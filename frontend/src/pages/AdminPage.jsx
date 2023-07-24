import React, { useEffect, useState, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import loadData from "../services/loadData";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);
  const allUsers = [userData];
  const {
    isOpen: isEditAlertOpen,
    onOpen: onEditAlertOpen,
    onClose: onEditAlertClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure();
  const cancelRef = useRef();

  useEffect(() => {
    loadData("users", setUserData);
  }, []);

  return (
    <Grid color="#0C3944" margin="2.5% 0 0 5%">
      <GridItem marginBottom="1.5%">
        <Text fontSize="3xl" fontWeight="800" marginBottom="1.5%">
          Users
        </Text>
      </GridItem>
      <GridItem margin="0 5% 5% 5%">
        <TableContainer border="1px" borderColor="#0C3944" borderRadius="10">
          <Table
            variant="striped"
            colorScheme="whatsapp"
            marginTop="0.5%"
            size="sm"
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Birthdate</Th>
                <Th>Email</Th>
                <Th marginRight="-5%">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allUsers.map((element) => {
                return element.map((user) => (
                  <Tr key={user.id}>
                    <Td>
                      {user.firstname} {user.lastname}
                    </Td>
                    <Td>{user.birthdate}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      <ButtonGroup
                        direction="row"
                        spacing={4}
                        variant="outlined"
                        marginLeft="-5%"
                      >
                        <>
                          <Button
                            leftIcon={<EditIcon />}
                            onClick={onEditAlertOpen}
                          >
                            Edit
                          </Button>
                          <AlertDialog
                            motionPreset="slideInBottom"
                            leastDestructiveRef={cancelRef}
                            onClose={onEditAlertClose}
                            isOpen={isEditAlertOpen}
                            isCentered
                          >
                            <AlertDialogOverlay bg="blackAlpha.200" />

                            <AlertDialogContent bg="#9B084F" color="#FCF6A0">
                              <AlertDialogHeader>
                                Confirm changes?
                              </AlertDialogHeader>
                              <AlertDialogCloseButton />
                              <AlertDialogBody>
                                Are you sure you want to edit this user?
                              </AlertDialogBody>
                              <AlertDialogFooter>
                                <Button
                                  ref={cancelRef}
                                  onClick={onEditAlertClose}
                                  _hover={{ bg: "#E36164" }}
                                >
                                  No
                                </Button>
                                <Button
                                  colorScheme="red"
                                  ml={3}
                                  _hover={{ bg: "#E36164" }}
                                >
                                  Yes
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </>
                        <>
                          <Button
                            leftIcon={<DeleteIcon />}
                            onClick={onDeleteAlertOpen}
                          >
                            Delete
                          </Button>
                          <AlertDialog
                            motionPreset="slideInBottom"
                            leastDestructiveRef={cancelRef}
                            onClose={onDeleteAlertClose}
                            isOpen={isDeleteAlertOpen}
                            isCentered
                          >
                            <AlertDialogOverlay bg="blackAlpha.200" />

                            <AlertDialogContent bg="#9B084F" color="#FCF6A0">
                              <AlertDialogHeader>
                                Confirm Deletion?
                              </AlertDialogHeader>
                              <AlertDialogCloseButton />
                              <AlertDialogBody>
                                Are you sure? You can't undo this action
                                afterwards.
                              </AlertDialogBody>
                              <AlertDialogFooter>
                                <Button
                                  ref={cancelRef}
                                  onClick={onDeleteAlertClose}
                                  _hover={{ bg: "#E36164" }}
                                >
                                  No
                                </Button>
                                <Button
                                  colorScheme="red"
                                  ml={3}
                                  _hover={{ bg: "#E36164" }}
                                >
                                  Yes
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ));
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
}
