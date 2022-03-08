import React, { Component } from "react";
import {
  Text,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Button,
} from "@chakra-ui/react";

export default class Orderhistorytable extends Component {
  render() {
    return (
      <div>
        <Table
          variant={"striped"}
          w={["300", "400", "500"]}
          alignSelf={"center"}
        >
          <TableCaption>Order History</TableCaption>
          <Thead>
            <Th>No</Th>
            <Th>Orderid</Th>
            <Th>Nama Hotel</Th>
            <Th>Check in</Th>
            <Th>Check out</Th>
            <Th>Jumlah</Th>
            <Th>Delete</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{this.props.index}</Td>
              <Td>{this.props.orderid}</Td>
              <Td>{this.props.titleHotel}</Td>
              <Td>{this.props.checkIn}</Td>
              <Td>{this.props.checkOut}</Td>
              <Td>{this.props.total}</Td>
              <Td>
                <Button colorScheme={"red"}>Delete</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}
