import { React, useEffect, useState } from "react";
import {
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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import loadData from "../services/loadData";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);
  const allUsers = [userData];

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
          <Table variant="striped" colorScheme="whatsapp" marginTop="0.5%">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Birthdate</Th>
                <Th>Email</Th>
                <Th>Actions</Th>
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
                        <Button leftIcon={<EditIcon />}>Edit</Button>
                        <Button leftIcon={<DeleteIcon />}>Delete</Button>
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
