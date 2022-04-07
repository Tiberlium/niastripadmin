import React, { useState, useEffect } from "react";
import {
  Table,
  Tr,
  Td,
  Thead,
  Tbody,
  TableCaption,
  Th,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { Scrollbar } from "smooth-scrollbar-react";

export default function Wisata() {
  const [data, setdata] = useState([]);

  async function get() {
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
    setdata(x);
  }

  async function remove(id) {
    const docRef = db.collection("Wisata").doc(id);
    docRef.delete();
    get();
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      <Text fontSize={"4xl"} fontWeight="bold" pb={5} pl={10} pt={5}>
        Daftar Tempat Wisata
      </Text>
      <Box pl={10} pr={10} pt={5}>
        <Link to="/Tambahkandatawisata">
          <Button colorScheme="blue" mb={5} leftIcon={<BsFillPlusCircleFill />}>
            Tambahkan yang baru
          </Button>
        </Link>
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
              {data.map((doc, index) => (
                <Tr key={doc.id}>
                  <Td>{index}</Td>
                  <Td>{doc.data.Nama}</Td>
                  <Td>{doc.data.Kabupaten}</Td>
                  <Td>{doc.data.Kecamatan}</Td>
                  <Td>
                    {doc.data.Latitude}/{doc.data.Longitude}
                  </Td>
                  <Td>
                    <Link to={`/Editwisata/${doc.id}`}>
                      <Button
                        colorScheme={"blue"}
                        variant="solid"
                        size="sm"
                        leftIcon={<BsFillPencilFill />}
                      >
                        Edit
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <Button
                      colorScheme={"red"}
                      variant="solid"
                      size="sm"
                      leftIcon={<BsFillTrashFill />}
                      onClick={() => remove(doc.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
