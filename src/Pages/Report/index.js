import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Thead,
  Tbody,
  Th,
  Td,
  Table,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

export default function Report() {
  return (
    <Box>
      <Text fontSize={'5xl'} mb={5}>
        Report
      </Text>
      <Tabs variant={"soft-rounded"} isFitted>
        <TabList mb="1em">
          <Tab>Penginapan</Tab>
          <Tab>Event</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant={"striped"}>
                <TableCaption>Data Report Penginapan</TableCaption>
                <Thead>
                  <Th>No</Th>
                  <Th>Order id</Th>
                  <Th>Nama</Th>
                  <Th>Kategori</Th>
                  <Th>Biaya</Th>
                  <Th>Komisi (10%)</Th>
                  <Th>Tanggal Transaksi</Th>
                  <Th>Detail</Th>
                </Thead>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant={"striped"}>
                <TableCaption>Data Report Event</TableCaption>
                <Thead>
                  <Th>No</Th>
                  <Th>Order id</Th>
                  <Th>Nama</Th>
                  <Th>Kategori</Th>
                  <Th>Biaya</Th>
                  <Th>Komisi (10%)</Th>
                  <Th>Tanggal Transaksi</Th>
                  <Th>Detail</Th>
                </Thead>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
