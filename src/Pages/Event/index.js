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
import { db, storages } from "../../Firebase";

import { Link } from "react-router-dom";

export default function Event() {
  const [data, setdata] = useState([]);
  const [alterData, setalterData] = useState("");
  const toast = useToast();

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Event").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setdata(x);
  };

  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemove = (id) => {
    const docRef = db.collection("Event").doc(id);
    docRef
      .get()
      .then((doc) => {
        setalterData(doc.data().Gambar);
      })
      .then(() => {
        const deleteUri = storages.refFromURL(alterData).delete();
        deleteUri.then(() => {
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
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Manage">
            Kelola
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Main/Event">
            Event
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} pb={5} pl={10} pt={5}>
        Daftar Event
      </Text>
      <Box pl={10} pr={10} pt={5}>
        <Link to="/Main/Tambahkandataevent">
          <Button colorScheme="blue" mb={5} leftIcon={<BsFillPlusCircleFill />}>
            Tambahkan yang baru
          </Button>
        </Link>
        <Table variant={"striped"} colorScheme="telegram" size="sm">
          <TableCaption fontWeight={"bold"} fontSize={"20"}>
            Daftar Event
          </TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nama</Th>
              <Th>Kabupaten</Th>
              <Th>Kategori</Th>
              <Th>Harga tiket</Th>
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
                <Td>{doc.data.Kategori}</Td>
                <Td>{formatRupiah(doc.data.Harga)}</Td>
                <Td>
                  {doc.data.Latitude}/{doc.data.Longitude}
                </Td>
                <Td>
                  <Link to={`/Main/Editevent/${doc.id}`}>
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
