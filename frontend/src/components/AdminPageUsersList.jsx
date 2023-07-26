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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import ApiHelper from "../services/ApiHelper";
import loadData from "../services/loadData";

export default function AdminPageUsersList({ user, index }) {
  const [, setUserData] = useState([]);
  const [, setIdToUse] = useState(null);
  const [editableUserIndex, setEditableUserIndex] = useState(-1);

  const handleEditClick = (userIndex) => {
    setEditableUserIndex(userIndex);
  };

  const handleSaveClick = () => {
    setEditableUserIndex(-1);
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
    ApiHelper(`users/${dataId}`, "delete").then(() => {
      loadData("users", setUserData);
    });
    onDeleteAlertClose();
  };

  return (
    <Tr>
      <Td>
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            placeholder={`${user.firstname} ${user.lastname}`}
            _placeholder={{ opacity: 1, color: "#0C3944" }}
            marginLeft="-5%"
          />
        ) : (
          `${user.firstname} ${user.lastname}`
        )}
      </Td>
      <Td>
        {editableUserIndex === index ? (
          <Input
            variant="filled"
            size="sm"
            bg="#86FC9C"
            type="date"
            placeholder={user.birthdate}
            marginLeft="-5%"
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
            placeholder={user.email}
            _placeholder={{ opacity: 1, color: "#0C3944" }}
            marginLeft="-5%"
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
                  Save
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
                    <AlertDialogHeader>Confirm Changes?</AlertDialogHeader>
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
                        onClick={handleSaveClick}
                      >
                        Yes
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
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                leftIcon={<EditIcon />}
                onClick={() => handleEditClick(index)}
              >
                Edit
              </Button>
              <Button
                leftIcon={<DeleteIcon />}
                onClick={() => handleAlert(user.id)}
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
                  <AlertDialogHeader>Confirm Deletion?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button
                      ref={cancelRef}
                      _hover={{ bg: "#E36164" }}
                      onClick={onDeleteAlertClose}
                    >
                      No
                    </Button>
                    <Button
                      colorScheme="red"
                      ml={3}
                      _hover={{ bg: "#E36164" }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Yes
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
