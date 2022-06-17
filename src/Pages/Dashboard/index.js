import React from "react";
import {
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BiMoney, BiUserCircle, BiTransferAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const Card = () => (
  <HStack>
    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiMoney size={30} color="green" />
      <StatLabel>Pendapatan</StatLabel>
      <StatNumber>Rp 10000</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        10.2%
      </StatHelpText>
    </Stat>

    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiUserCircle size={30} color="red" />
      <StatLabel>Pengguna</StatLabel>
      <StatNumber>2</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />2
      </StatHelpText>
    </Stat>

    <Stat borderWidth={1} p={5} w="2xs" borderRadius={10} boxShadow="base">
      <BiTransferAlt size={30} color="orange" />
      <StatLabel>Transaksi</StatLabel>
      <StatNumber>7</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />5
      </StatHelpText>
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
      <Text fontSize="5xl" mb='12'>
        Dashboard anda
      </Text>
      <Card />
    </Box>
  );
}
