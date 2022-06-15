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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function Report() {
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<IoChevronForwardSharp color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Dashboard">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Manage">
            Report
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} mb={5}>
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
