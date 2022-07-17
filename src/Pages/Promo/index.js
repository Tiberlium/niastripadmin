import React from "react";
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

export default function Promo() {
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
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
