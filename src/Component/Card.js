import { HStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { BiUserCircle, BiTransferAlt } from "react-icons/bi";

import { GiPayMoney } from "react-icons/gi";

import { AiFillMoneyCollect } from "react-icons/ai";

const Card = ({ pendapatan, pengguna, transaksi, total }) => (
  <HStack>
    <Stat borderWidth={1} p={5} w="52" borderRadius={10} boxShadow="base">
      <AiFillMoneyCollect size={50} color="green" />
      <StatLabel>Pendapatan</StatLabel>
      <StatNumber>{pendapatan}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="52" borderRadius={10} boxShadow="base">
      <BiUserCircle size={50} color="red" />
      <StatLabel>Pengguna</StatLabel>
      <StatNumber>{pengguna}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="52" borderRadius={10} boxShadow="base">
      <BiTransferAlt size={50} color="orange" />
      <StatLabel>Transaksi</StatLabel>
      <StatNumber>{transaksi}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={5} w="52" borderRadius={10} boxShadow="base">
      <GiPayMoney size={50} color="blue" />
      <StatLabel>Total transaksi</StatLabel>
      <StatNumber>{total}</StatNumber>
    </Stat>
  </HStack>
);

export default Card;
