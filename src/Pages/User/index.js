import React from "react";

import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Tbody,
  Button,
  Text,
  Box,
  TableContainer,
} from "@chakra-ui/react";
import { IoMdWarning, IoMdTrash } from "react-icons/io";

export default function User() {
  return (
    <Box>
      <Text fontSize={"5xl"} mt={10} ml={5}>
        List Pengguna
      </Text>
      <TableContainer>
        <Table variant="striped" w={[400, 500, 700]}>
          <TableCaption>PENGGUNA</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Id</Th>
              <Th>Nama</Th>
              <Th>Email atau phone</Th>
              <Th>Detail</Th>
              <Th>Hapus</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>
                <Button
                  colorScheme="red"
                  size="sm"
                  leftIcon={<IoMdTrash />}
                  mr={5}
                  onClick={this.props.hapus}
                >
                  Hapus
                </Button>
                <Button
                  colorScheme="yellow"
                  size="sm"
                  leftIcon={<IoMdWarning />}
                  onClick={this.props.ban}
                >
                  Larang
                </Button>
              </Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
