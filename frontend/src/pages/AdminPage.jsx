import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";

import loadData from "../services/loadData";
import AdminPageUsersList from "../components/AdminPageUsersList";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);

  const allUsers = [...userData];

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
              {allUsers.map((user, index) => (
                <AdminPageUsersList key={user.id} user={user} index={index} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
}
