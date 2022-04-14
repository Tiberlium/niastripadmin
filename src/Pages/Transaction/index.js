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
} from "@chakra-ui/react";

export default function Transaction() {
  return (
    <Table variant={"striped"}>
      <TableCaption>Transaction</TableCaption>
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
  );
}
