import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";

export default function Transaction() {
  return (
    <Box>
      <Text fontSize={"5xl"} color="blackAlpha">
        Transaksi
      </Text>
      <Table variant={"striped"}>
        <TableCaption>Transaksi</TableCaption>
        <Thead>
          <Th>No</Th>
          <Th>Id order</Th>
          <Th>Pengguna</Th>
          <Th>Status</Th>
          <Th>Jumlah</Th>
        </Thead>
        {/* <Tbody>
        <Tr>
         
        </Tr>
      </Tbody> */}
      </Table>
    </Box>
  );
}
