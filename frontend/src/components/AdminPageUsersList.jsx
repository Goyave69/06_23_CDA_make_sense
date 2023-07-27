/* eslint-disable react/destructuring-assignment */
import React, { useState, useRef } from "react";
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
  Input,
  Tr,
  Td,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import ApiHelper, { deleteApiHelper } from "../services/ApiHelper";

export default function AdminPageUsersList({ user, index, setDataReload }) {
  const [, setIdToUse] = useState(null);
  const [editableUserIndex, setEditableUserIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});

  const toast = useToast();

  const handleEditClick = (userIndex) => {
    setEditableUserIndex(userIndex);
    setEditedData(user);
  };

  const handleCancelClick = () => {
    setEditableUserIndex(-1);
  };

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

  const handleAlert = (id) => {
    onDeleteAlertOpen();
    setIdToUse(id);
  };

  const handleDeleteUser = (dataId = "") => {
    deleteApiHelper(`users/${dataId}`, "delete").then(() => {
      setDataReload((curr) => !curr);
    });
    onDeleteAlertClose();

    toast({
      title: "Utilisateur supprimé.",
      description: "On lui souhaite bon vent!",
      status: "success",
      duration: 3000,
    });
  };
  const handleEditUser = (dataId = "") => {
    ApiHelper(`users/${dataId}`, "put", JSON.stringify(editedData)).then(() => {
      setDataReload((curr) => !curr);
    });
    onEditAlertClose();
    handleCancelClick();
    toast({
      title: "Utilisateur modifié.",
      description: "Il est comme neuf!",
      status: "success",
      duration: 3000,
    });
  };

  return (
    <Tr>
      <Td>
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            value={editedData.firstname}
            placeholder={user.firstname}
            _placeholder={{ opacity: 1, color: "#0C3944" }}
            marginLeft="-5%"
            onChange={(e) =>
              setEditedData({ ...editedData, firstname: e.target.value })
            }
          />
        ) : (
          `${user.firstname}`
        )}
      </Td>
      <Td>
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            value={editedData.lastname}
            placeholder={user.lastname}
            _placeholder={{ opacity: 1, color: "#0C3944" }}
            marginLeft="-5%"
            onChange={(e) =>
              setEditedData({ ...editedData, lastname: e.target.value })
            }
          />
        ) : (
          `${user.lastname}`
        )}
      </Td>
      <Td pl="4.5%">
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            value={editedData.birthdate}
            type="date"
            placeholder={user.birthdate}
            marginLeft="-5%"
            onChange={(e) =>
              setEditedData({ ...editedData, birthdate: e.target.value })
            }
          />
        ) : (
          `${user.birthdate}`
        )}
      </Td>
      <Td>
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            value={editedData.email}
            _placeholder={{ opacity: 1, color: "#0C3944" }}
            marginLeft="-5%"
            onChange={(e) =>
              setEditedData({ ...editedData, email: e.target.value })
            }
          />
        ) : (
          `${user.email}`
        )}
      </Td>
      <Td>
        <ButtonGroup
          direction="row"
          spacing={4}
          variant="outlined"
          marginLeft="-5%"
        >
          {editableUserIndex === index ? (
            <>
              <>
                <Button
                  leftIcon={<CheckIcon />}
                  colorScheme="blue"
                  onClick={onEditAlertOpen}
                >
                  Enregistrer
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
                      Confirmer ces changements?
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                      Êtes vous sûr de vouloir modifier cet utilisateur?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button
                        ref={cancelRef}
                        onClick={onEditAlertClose}
                        _hover={{ bg: "#E36164" }}
                      >
                        Non
                      </Button>
                      <Button
                        colorScheme="red"
                        ml={3}
                        _hover={{ bg: "#E36164" }}
                        onClick={() => handleEditUser(user.id)}
                      >
                        Oui
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
              <Button
                leftIcon={<CloseIcon />}
                colorScheme="red"
                onClick={() => handleCancelClick(user.id)}
              >
                Annuler
              </Button>
            </>
          ) : (
            <>
              <Button
                leftIcon={<EditIcon />}
                onClick={() => handleEditClick(index)}
              >
                Modifier
              </Button>
              <Button
                leftIcon={<DeleteIcon />}
                onClick={() => handleAlert(user.id)}
              >
                Supprimer
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
                    Confirmer la suppression?
                  </AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    En êtes vous sûr? Cette action est IRRÉVERSIBLE.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button
                      ref={cancelRef}
                      _hover={{ bg: "#E36164" }}
                      onClick={onDeleteAlertClose}
                    >
                      Non
                    </Button>
                    <Button
                      colorScheme="red"
                      ml={3}
                      _hover={{ bg: "#E36164" }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Oui
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
        </ButtonGroup>
      </Td>
    </Tr>
  );
}
