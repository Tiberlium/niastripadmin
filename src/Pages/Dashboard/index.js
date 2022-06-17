import React from "react";
import {
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

import { BiUserCircle, BiTransferAlt, BiMoney } from "react-icons/bi";

import { GiPayMoney } from "react-icons/gi";

const Card = ({ pendapatan, pengguna, transaksi, total }) => (
  <HStack>
    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiMoney size={50} color="green" />
      <StatLabel>Pendapatan</StatLabel>
      <StatNumber>{pendapatan}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiUserCircle size={50} color="red" />
      <StatLabel>Pengguna</StatLabel>
      <StatNumber>{pengguna}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiTransferAlt size={50} color="orange" />
      <StatLabel>Transaksi</StatLabel>
      <StatNumber>{transaksi}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <GiPayMoney size={50} color="blue" />
      <StatLabel>Total transaksi</StatLabel>
      <StatNumber>{total}</StatNumber>
    </Stat>
  </HStack>
);

const Navbread = () => (
  <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="#" isCurrentPage>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default function Dashboard() {
  return (
    <Box>
      <Navbread />
      <Text fontSize="5xl" mb="12">
        Dashboard anda
      </Text>
      <Card />
    </Box>
  );
}
