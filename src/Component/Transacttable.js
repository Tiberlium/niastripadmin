import { Component } from "react";
import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default class Transacttable extends Component {
  render() {
    return (
      <div>
        <Table variant={"striped"}>
          <TableCaption>Transaction</TableCaption>
          <Thead>
            <Th>No</Th>
            <Th>Id order</Th>
            <Th>Pengguna</Th>
            <Th>Status</Th>
            <Th>Jumlah</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{this.props.index}</Td>
              <Td>{this.props.orderId}</Td>
              <Td>{this.props.pengguna}</Td>
              <Td>{this.props.status}</Td>
              <Td>{this.props.total}</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}
