import React, { useEffect, useState } from "react";
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

import { db, storages } from "../../Firebase";

export default function Makanan() {
  const [data, setdata] = useState([]);

  const get = async () => {
    let x = [];
    const dataRef = await db.collection("Makanan").get();
    dataRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setdata(x);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      <Text fontSize={"5xl"} pb={5} pl={10} pt={5}>
        Daftar Makanan Tradisional
      </Text>
      <Box pl={10} pr={10} pt={5}>
        <Link to="/Tambahkandatamakanan">
          <Button colorScheme="blue" mb={5} leftIcon={<BsFillPlusCircleFill />}>
            Tambahkan yang baru
          </Button>
        </Link>
        <Table variant={"striped"} colorScheme="telegram" size="sm">
          <TableCaption fontWeight={"bold"} fontSize={"20"}>
            Makanan Tradisional list
          </TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nama</Th>
              <Th>Kategori</Th>
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
                <Td>{doc.data.Kategori}</Td>
                <Td>
                  {doc.data.lat}/{doc.data.long}
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
