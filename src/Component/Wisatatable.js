import React, { Component } from "react";
import {
  Table,
  Tr,
  Td,
  Thead,
  Tbody,
  TableCaption,
  Th,
  Button,
} from "@chakra-ui/react";

export default class Wisatatable extends Component {
  render() {
    return (
      <Table variant={"striped"} colorScheme="facebook">
        <TableCaption fontWeight={"bold"} fontSize={"20"}>
          Wisata List
        </TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Nama</Th>
            <Th>Deskripsi</Th>
            <Th>Kabupaten</Th>
            <Th>Kota</Th>
            <Th>Latitude/Longitude</Th>
            <Th>Aksi Edit</Th>
            <Th>Aksi Hapus</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{this.props.nomor}</Td>
            <Td>{this.props.nama}</Td>
            <Td>{this.props.deskripsi}</Td>
            <Td>{this.props.kabupaten}</Td>
            <Td>{this.props.kota}</Td>
            <td>{this.props.latlong}</td>
            <Td>
              <Button colorScheme={"blue"} variant="outline">
                Edit
              </Button>
            </Td>
            <Td>
              <Button colorScheme={"red"} variant="outline">
                Delete
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
}
