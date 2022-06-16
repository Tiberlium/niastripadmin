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
  Tr,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";
import { db } from "../../Firebase";

export default function Report() {
  const [reservation, setreservation] = React.useState([]);
  const [eventtiket, seteventtiket] = React.useState([]);

  const stringTruncate = (str, length) => {
    const dots = str?.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };

  async function getReservationdata() {
    let x = [];
    const docRef = await db
      .collection("Transaksi")
      .where("jenis", "==", "Penginapan")
      .get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setreservation(x);
  }

  async function getTiketevent() {
    let y = [];

    const docRef = await db
      .collection("Transaksi")
      .where("jenis", "==", "Event")
      .get();

    docRef.docs.map((doc) => {
      y.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    seteventtiket(y);
  }

  React.useEffect(() => {
    getReservationdata();
  }, []);

  React.useEffect(() => {
    getTiketevent();
  }, []);

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
            Laporan
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} mb={5}>
        Laporan
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
                <Tbody>
                  {reservation.map((doc, index) => (
                    <Tr key={doc["id"]}>
                      <Td>{index + 1}</Td>
                      <Td>{stringTruncate(doc["data"]["orderid"], 20)}</Td>
                      <Td>{doc["data"]["nama"]}</Td>
                      <Td>{doc["data"]["jenis"]}</Td>
                      <Td>{doc["data"]["amount"]}</Td>
                      <Td>{doc["data"]["amount"]}</Td>
                      <Td>{doc["data"]["transactiontime"]}</Td>
                      <Td>
                        <Button colorScheme={"green"}>Detail</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
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
                <Tbody>
                  {eventtiket.map((doc, index) => (
                    <Tr key={doc["id"]}>
                      <Td>{index + 1}</Td>
                      <Td>{stringTruncate(doc["data"]["orderid"], 20)}</Td>
                      <Td>{doc["data"]["nama"]}</Td>
                      <Td>{doc["data"]["jenis"]}</Td>
                      <Td>{doc["data"]["amount"]}</Td>
                      <Td>{doc["data"]["amount"]}</Td>
                      <Td>{doc["data"]["transactiontime"]}</Td>
                      <Td>
                        <Button colorScheme={"green"}>Detail</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
