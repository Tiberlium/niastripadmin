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
  Center,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { IoMdWarning, IoMdTrash } from "react-icons/io";

export default class Usertable extends Component {
  render() {
    return (
      <div>
        <Center>
          <Table variant="striped" w={[400, 500, 700]}>
            <TableCaption>PENGGUNA</TableCaption>
            <Thead>
              <Tr>
                <Th>Nama</Th>
                <Th>Email atau phone</Th>
                <Th>Hapus atau banned</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{this.props.nama}</Td>
                <Td>{this.props.email}</Td>
                <td>
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
                </td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Nama</Th>
                <Th>Email atau phone</Th>
                <Th>Hapus atau banned</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Center>
      </div>
    );
  }
}
