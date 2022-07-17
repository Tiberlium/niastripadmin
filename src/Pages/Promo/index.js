import React, { useState, useEffect, useRef } from "react";
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
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { BsChevronRight, BsFillPlusCircleFill } from "react-icons/bs";
import { db } from "../../Firebase";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

export default function Promo() {
  const [data, setdata] = useState([]);
  let ismounted = useRef();
  const toast = useToast();

  async function get() {
    let x = [];
    const docRef = await db.collection("Promo").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (ismounted.current) return setdata(x);
  }

  useEffect(() => {
    ismounted.current = true;
    get();
    return () => (ismounted.current = false);
  }, []);

  async function onRemove(id) {
    await db
      .collection("Promo")
      .doc(id)
      .delete()
      .then(() => {
        toast({
          title: "Data di hapus.",
          description: "Data telah di berhasil hapus",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        get();
      })
      .catch(() => {
        toast({
          title: "Data gagal di hapus.",
          description: "Ada kesalahan data gagal di hapus",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  }

  return (
    <Box mr="52">
      <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Manage">
            Kelola
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Promo
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Text fontSize={"5xl"} pb={5} pt={5}>
          Daftar Promo
        </Text>
        <Box pl={10} pr={10} pt={5}>
          <Link to="/Main/Tambahkandatapromo">
            <Button
              colorScheme="blue"
              mb={5}
              leftIcon={<BsFillPlusCircleFill />}
            >
              Tambahkan yang baru
            </Button>
          </Link>
          <Table variant={"striped"} colorScheme="telegram" size="sm">
            <TableCaption fontWeight={"bold"} fontSize={"20"}>
              Tabel promo
            </TableCaption>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama Promo</Th>
                <Th>Batas aktif</Th>
                <Th>Kode unik</Th>
                <Th>Potongan</Th>
                <Th>Tempat berlaku</Th>
                <Th>Aksi Edit</Th>
                <Th>Aksi Hapus</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((doc, index) => (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td>{doc["data"]["Nama"]}</Td>
                  <Td>{doc["data"]["Waktu"]}</Td>
                  <Td>{doc["data"]["Kode"]}</Td>
                  <Td>{doc["data"]["Potongan"]}</Td>
                  <Td>{doc["data"]["Tempat"]}</Td>
                  <Td>
                    <Link to={`/Main/Editpromo/${doc.id}`}>
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
                      onChange={() => onRemove(doc.id)}
                    >
                      Hapus
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
