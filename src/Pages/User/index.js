import React, { useEffect, useState } from "react";

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
import { IoIosInformationCircle, IoMdTrash } from "react-icons/io";

import { db } from "../../Firebase";

export default function User() {
  const [data, setdata] = useState([]);

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Users").get();
    docRef.docs.map((doc) => {
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
              <Th>Gender</Th>
              <Th>Detail</Th>
              <Th>Hapus</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((doc, index) => (
              <Tr>
                <Td>{index}</Td>
                <Td>{doc.data.id}</Td>
                <Td>{doc.data.name}</Td>
                <Td>{doc.data.gender}</Td>
                <Td>
                  <Button
                    colorScheme="green"
                    size="sm"
                    leftIcon={<IoIosInformationCircle />}
                  >
                    Detail
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    size="sm"
                    leftIcon={<IoMdTrash />}
                    mr={5}
                  >
                    Hapus
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
