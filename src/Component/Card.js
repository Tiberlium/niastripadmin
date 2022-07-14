import { HStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { BiUserCircle, BiTransferAlt } from "react-icons/bi";

import { GiPayMoney } from "react-icons/gi";

import { AiFillMoneyCollect } from "react-icons/ai";

const Card = ({ pendapatan, pengguna, transaksi, total }) => (
  <HStack>
    <Stat borderWidth={1} p={3} w='36' borderRadius={10} boxShadow="base">
      <AiFillMoneyCollect size={30} color="green" />
      <StatLabel>Total Pendapatan</StatLabel>
      <StatNumber>{pendapatan}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={3} w="36" borderRadius={10} boxShadow="base">
      <BiUserCircle size={30} color="red" />
      <StatLabel>Pengguna</StatLabel>
      <StatNumber>{pengguna}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={3} w="36" borderRadius={10} boxShadow="base">
      <BiTransferAlt size={30} color="orange" />
      <StatLabel>Transaksi</StatLabel>
      <StatNumber>{transaksi}</StatNumber>
    </Stat>

    <Stat borderWidth={1} p={3} w="36" borderRadius={10} boxShadow="base">
      <GiPayMoney size={30} color="blue" />
      <StatLabel>Total transaksi</StatLabel>
      <StatNumber>{total}</StatNumber>
    </Stat>
  </HStack>
);

export default Card;
