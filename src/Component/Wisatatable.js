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
import { db } from "../Firebase";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

export default class Wisatatable extends Component {
  state = {
    data: [],
  };

  
  async get() {
    let x = [];
    const docRef = await db
      .collection("Wisata")
      .where("Kategori", "==", "Tempat wisata")
      .get();
    docRef.docs.map((doc) =>
      x.push({
        id: doc.id,
        data: doc.data(),
      })
    );
    this.setState({ data: x });
  }

  componentDidMount() {
    this.get();
  }
  render() {
    return (
      <Table variant={"striped"} colorScheme="telegram" size="sm">
        <TableCaption fontWeight={"bold"} fontSize={"20"}>
          Wisata List
        </TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Nama</Th>
            <Th>Kabupaten</Th>
            <Th>Kota</Th>
            <Th>Latitude/Longitude</Th>
            <Th>Aksi Edit</Th>
            <Th>Aksi Hapus</Th>
          </Tr>
        </Thead>
        <Tbody>
          {this.state.data.map((doc, index) => (
            <Tr key={doc.id}>
              <Td>{index}</Td>
              <Td>{doc.data.Nama}</Td>
              <Td>{doc.data.Kabupaten}</Td>
              <Td>{doc.data.Kecamatan}</Td>
              <Td>
                {doc.data.Latitude}/{doc.data.Longitude}
              </Td>
              <Td>
                <Button
                  colorScheme={"blue"}
                  variant="solid"
                  size="sm"
                  leftIcon={<BsFillPencilFill />}
                  onClick={()=>this.props.edit(doc.id)}
                >
                  Edit
                </Button>
              </Td>
              <Td>
                <Button
                  colorScheme={"red"}
                  variant="solid"
                  size="sm"
                  leftIcon={<BsFillTrashFill />}
                  onClick={this.props.delete}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  }
}
