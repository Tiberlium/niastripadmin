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
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsChevronRight,
} from "react-icons/bs";

import { Link } from "react-router-dom";

import { db, storages } from "../../Firebase";

export default function Makanan() {
  const [data, setdata] = useState([]);
  const [alterData, setalterData] = useState([]);
  const toast = useToast();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const onRemove = (id) => {
    const docRef = db.collection("Makanan").doc(id);

    docRef
      .get()
      .then((doc) => {
        setalterData(doc.data.Galery);
      })
      .then(() => {
        const deleteImages = alterData.map((doc) => {
          storages.refFromURL(doc).delete();
        });

        Promise.all(deleteImages).then(() => {
          docRef
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
        });
      });
  };

  return (
    <Box>
      <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Manage">
            Manage
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Makanan Tradisional
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} pb={5} pl={10} pt={5}>
        Daftar Makanan Tradisional
      </Text>
      <Box pl={10} pr={10} pt={5}>
        <Link to="/Main/Tambahkandatamakanan">
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
                  <Link to={`/Main/Editmakanan/${doc.id}`}>
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
                    onClick={() => onRemove(doc.id)}
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
