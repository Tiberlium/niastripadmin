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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../Firebase";
import Detailuser from "../../Component/Detailuser";
import { IoIosArrowForward } from "react-icons/io";

function trunctext(text) {
  return text?.length > 20 ? `${text.substr(0, 20)}...` : text;
}

function formatRupiah(uang) {
  return new Intl.NumberFormat("ID-id", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(uang);
}

export default function Userdetail() {
  const [data, setdata] = useState({});
  const { id } = useParams();

  const get = async () => {
    const docRef = await db.collection("Users").doc(id).get();
    setdata(docRef.data());
  };

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mr={10}>
      <Breadcrumb
        spacing="8px"
        separator={<IoIosArrowForward color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/User">
            Pengguna
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Detail pengguna
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="5xl">Detail Pengguna</Text>
      <Detailuser
        id={data.id}
        nama={data.name}
        alamat={data.address}
        phone={data.phoneNumber}
        nation={data.nation}
        gender={data.gender}
        email={data.email}
        gambar={data.img}
      />
      <Text fontSize="2xl" mb={5} color="blackAlpha.800">
        Order History Penginapan
      </Text>
      <Table variant="striped" size="sm">
        <TableCaption>Order History Penginapan</TableCaption>
        <Thead>
          <Th>No</Th>
          <Th>Nama</Th>
          <Th>Order id</Th>
          <Th>Check in</Th>
          <Th>Check out</Th>
          <Th>Jumlah</Th>
          <Th>Tarif</Th>
          <Th>Total</Th>
        </Thead>
        <Tbody>
          {data["reservation"]?.map((doc, index) => (
            <Tr>
              <Td>{index + 1}</Td>
              <Td>{doc.nama}</Td>
              <Td>
                <Text isTruncated noOfLines={[1, 2, 3]}>
                  {trunctext(doc.orderid)}
                </Text>
              </Td>
              <Td>{doc.checkin}</Td>
              <Td>{doc.checkout}</Td>
              <Td>{doc.jumlah}</Td>
              <Td>{formatRupiah(doc.tarif)}</Td>
              <Td>{formatRupiah(doc.total)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Text fontSize="2xl" mb={5} color="blackAlpha.800">
        Order History Event
      </Text>

      <Table variant="striped" size="sm" w="full">
        <TableCaption>Order History Event</TableCaption>
        <Thead>
          <Th>No</Th>
          <Th>Nama</Th>
          <Th>Order id</Th>
          <Th>Jenis</Th>
          <Th>Metode</Th>
          <Th>Harga</Th>
          <Th>Waktu Pemesanan</Th>
        </Thead>
        <Tbody>
          {data["tiket"]?.map((doc, index) => (
            <Tr>
              <Td>{index + 1}</Td>
              <Td>{doc.nama}</Td>
              <Td>
                <Text>{trunctext(doc.orderid)}</Text>
              </Td>
              <Td>{doc.jenis}</Td>
              <Td>{doc.metode}</Td>
              <Td>{formatRupiah(doc.tarif)}</Td>
              <Td>{doc.time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
