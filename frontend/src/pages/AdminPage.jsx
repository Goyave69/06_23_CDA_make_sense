import { React, useEffect, useState } from "react";
import {
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
import loadData from "../services/loadData";

export default function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("users", setData);
  }, []);

  return (
    <Grid color="#0C3944" margin="5% 0 0 5%">
      <GridItem marginBottom="1.5%">
        <Text fontSize="3xl" fontWeight="800" marginBottom="1.5%">
          Users
        </Text>
      </GridItem>
      <GridItem margin="0 5% 5% 5%">
        <TableContainer border="1px" borderColor="#0C3944">
          <Table variant="striped" colorScheme="whatsapp">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Birthdate</Th>
                <Th>Email</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Jane Smith</Td>
                <Td>1985-12-03</Td>
                <Td>janesmith@example.com</Td>
                <Td>User</Td>
              </Tr>
              <Tr>
                <Td>John Doe</Td>
                <Td>1990-05-15</Td>
                <Td>johndoe@example.com</Td>
                <Td>Admin</Td>
              </Tr>
              <Tr>
                <Td>Michael Johnson</Td>
                <Td>1988-07-21</Td>
                <Td>michaeljohnson@example.com</Td>
                <Td>Expert</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <GridItem marginX="5%">
        <TableContainer>
          <Table variant="striped" colorScheme="whatsapp">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Birthdate</Th>
                <Th>Email</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user) => (
                <Tr key={user.id}>
                  <Td>
                    {user.firstname} + + {user.lastname}
                  </Td>
                  <Td>{user.birthdate}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
}
