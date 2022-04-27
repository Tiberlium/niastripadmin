import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Table,
  Td,
  Tr,
  Th,
  TableCaption,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import Detailuser from "../../Component/Detailuser";

export default function Userdetail() {
  const [data, setdata] = useState({});
  const { id } = useParams();

  const get = async () => {
    const docRef = await db.collection("Users").doc(id).get();
    setdata(docRef.data());
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      <Text fontSize="5xl">User Detail</Text>
      <Detailuser
        nama={data.name}
        alamat={data.address}
        phone={data.phoneNumber}
        nation={data.nation}
        gender={data.gender}
        email={data.email}
        gambar={data.gambar}
      />

      <Table variant="striped" size="md">
        <TableCaption>Order History</TableCaption>
        <Thead>
          <Th>No</Th>
          <Th>Nama</Th>
          <Th>Order id</Th>
          <Th>Check IN</Th>
          <Th>Check Out</Th>
          <Th>Harga</Th>
          <Th>Jumlah Orang</Th>
        </Thead>
        <Tbody>
          {data["reservation"]?.map((doc, index) => (
            <Tr>
              <Td>{(index = 1)}</Td>
              <Td>{doc.nama}</Td>
              <Td>
                <Text isTruncated noOfLines={[1, 2, 3]}>
                  {doc.orderId}
                </Text>
              </Td>
              <Td>{doc.checkIN}</Td>
              <Td>{doc.checkOUT}</Td>
              <Td>{doc.jumlah}</Td>
              <Td>{doc.harga}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
