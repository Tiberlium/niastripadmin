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
  Center,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";
import { db } from "../../Firebase";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import img from "../../Asset/Logo.png";

export default function Report() {
  const [reservation, setreservation] = React.useState([]);
  const [eventtiket, seteventtiket] = React.useState([]);
  let totalTransaksireservation = 0;
  let pendapatanreservation = 0;

  let totalTransaksievent = 0;
  let pendapatanEvent = 0;

  const navigation = useNavigate();

  const today = new Date();

  const stringTruncate = (str, length) => {
    const dots = str?.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };

  function Percentage(num, per) {
    return (num / 100) * per;
  }

  const totalTransact = reservation.map((doc) => {
    return (totalTransaksireservation += Number(doc["data"]["amount"]));
  });

  const withdrawal = reservation.map((doc) => {
    return (pendapatanreservation += Percentage(
      Number(doc["data"]["amount"]),
      10
    ));
  });

  const totalTransactevent = eventtiket.map((doc) => {
    return (totalTransaksievent += Number(doc["data"]["amount"]));
  });

  const withdrawalevent = eventtiket.map((doc) => {
    return (pendapatanEvent += Percentage(Number(doc["data"]["amount"]), 10));
  });

  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  let dataRes = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: `Report Reservation ${today.toDateString()}`,
    orientationLandscape: true,
    compress: true,
    logo: {
      src: img,
      width: 26.66, //aspect ratio = width/height
      height: 26.66,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    stamp: {
      inAllPages: true,
      src: img,
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Nias trip",
      address: "Medan, Sumatera utara, indonesia",
      phone: "(+62) 069 11 11 111",
      email: "niastrip@gmail.com",
      email_1: "niastrip@gmail.al",
      website: "www.niastrip.al",
    },
    // contact: {
    //   label: "Reprt issued for:",
    //   name: "Client Name",
    //   address: "Albania, Tirane, Astir",
    //   phone: "(+355) 069 22 22 222",
    //   email: "client@website.al",
    //   otherInfo: "www.website.al",
    // },
    invoice: {
      label: "Report ###: ",
      num: 19,
      invDate: `Report Date: ${today.toDateString()}`,
      invGenDate: `Generted Date: ${today.toDateString()}`,
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "Order id",
          style: {
            width: 50,
          },
        },
        {
          title: "Nama",
          style: {
            width: 60,
          },
        },
        {
          title: "Jenis",
          style: {
            width: 50,
          },
        },
        { title: "Harga" },
        { title: "Komisi" },
        { title: "tanggal transaksi" },
      ],
      table: reservation.map((item, index) => [
        index + 1,
        stringTruncate(item["data"]["orderid"], 20),
        item["data"]["nama"],
        item["data"]["jenis"],
        formatRupiah(item["data"]["amount"]),
        formatRupiah(Percentage(item["data"]["amount"], 10)),
        item["data"]["transactiontime"],
      ]),
      additionalRows: [
        {
          col1: "Total:",
          col2: `${formatRupiah(Number(totalTransaksireservation))}`,
          col3: "ALL",
          style: {
            fontSize: 14, //optional, default 12
          },
        },
        {
          col1: "Potongan:",
          col2: "10",
          col3: "%",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
        {
          col1: "Pendapatan:",
          col2: `${formatRupiah(Number(pendapatanreservation))}`,
          col3: "ALL",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
      ],

      invDescLabel: "Report Note",
      invDesc:
        "Copyright permission footnotes acknowledge the source of lengthy quotations, scale and test items, and figures and tables that have been reprinted or adapted.",
    },
    footer: {
      text: "The Report is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  let dataEve = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: `Report event ${today.toDateString()}`,
    orientationLandscape: true,
    compress: true,
    logo: {
      src: img,
      width: 26.66, //aspect ratio = width/height
      height: 26.66,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    stamp: {
      inAllPages: true,
      src: img,
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Nias trip",
      address: "Medan, Sumatera utara, indonesia",
      phone: "(+62) 069 11 11 111",
      email: "niastrip@gmail.com",
      email_1: "niastrip@gmail.al",
      website: "www.niastrip.al",
    },
    // contact: {
    //   label: "Reprt issued for:",
    //   name: "Client Name",
    //   address: "Albania, Tirane, Astir",
    //   phone: "(+355) 069 22 22 222",
    //   email: "client@website.al",
    //   otherInfo: "www.website.al",
    // },
    invoice: {
      label: "Report ###: ",
      num: 19,
      invDate: `Report Date: ${today.toDateString()}`,
      invGenDate: `Generted Date: ${today.toDateString()}`,
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "Order id",
          style: {
            width: 50,
          },
        },
        {
          title: "Nama",
          style: {
            width: 60,
          },
        },
        {
          title: "Jenis",
          style: {
            width: 50,
          },
        },
        { title: "Harga" },
        { title: "Komisi" },
        { title: "tanggal transaksi" },
      ],
      table: eventtiket.map((item, index) => [
        index + 1,
        stringTruncate(item["data"]["orderid"], 20),
        item["data"]["nama"],
        item["data"]["jenis"],
        formatRupiah(item["data"]["amount"]),
        formatRupiah(Percentage(item["data"]["amount"], 10)),
        item["data"]["transactiontime"],
      ]),
      additionalRows: [
        {
          col1: "Total:",
          col2: `${formatRupiah(Number(totalTransaksievent))}`,
          col3: "ALL",
          style: {
            fontSize: 14, //optional, default 12
          },
        },
        {
          col1: "Potongan:",
          col2: "10",
          col3: "%",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
        {
          col1: "Pendapatan:",
          col2: `${formatRupiah(Number(pendapatanEvent))}`,
          col3: "ALL",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
      ],

      invDescLabel: "Report Note",
      invDesc:
        "Copyright permission footnotes acknowledge the source of lengthy quotations, scale and test items, and figures and tables that have been reprinted or adapted.",
    },
    footer: {
      text: "The Report is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  function createpdfreservation() {
    const pdfObj = jsPDFInvoiceTemplate(dataRes);
    pdfObj.jsPDFDocObject.save();
  }

  function createpdfevent() {
    const pdfObj = jsPDFInvoiceTemplate(dataEve);
    pdfObj.jsPDFDocObject.save();
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getTiketevent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mr={5}>
      <Breadcrumb
        spacing="8px"
        separator={<IoChevronForwardSharp color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Laporan
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} mb={5}>
        Laporan
      </Text>
      <Tabs variant={"soft-rounded"} isFitted>
        <TabList mb="1em" w="4xl">
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Penginapan</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Event</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer mb={10}>
              <Table variant={"striped"} size="sm">
                <TableCaption placement="top" mb={5}>
                  Data Report Penginapan
                </TableCaption>
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
                      <Td>{stringTruncate(doc["data"]["nama"], 9)}</Td>
                      <Td>{doc["data"]["jenis"]}</Td>
                      <Td>{formatRupiah(doc["data"]["amount"])}</Td>
                      <Td>
                        {formatRupiah(Percentage(doc["data"]["amount"], 10))}
                      </Td>
                      <Td>{doc["data"]["transactiontime"]}</Td>
                      <Td>
                        <Link to={`/Main/Transactiondetail/${doc.id}`}>
                          <Button colorScheme={"blue"}>Detail</Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <Button
                colorScheme="blue"
                size="md"
                onClick={createpdfreservation}
              >
                Generate Laporan Penginapan
              </Button>
            </Center>
          </TabPanel>
          <TabPanel>
            <TableContainer mb={10}>
              <Table variant={"striped"} size="sm">
                <TableCaption placement="top" mb={5}>
                  Data Report Event
                </TableCaption>
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
                      <Td>{stringTruncate(doc["data"]["nama"], 9)}</Td>
                      <Td>{doc["data"]["jenis"]}</Td>
                      <Td>{formatRupiah(doc["data"]["amount"])}</Td>
                      <Td>
                        {formatRupiah(Percentage(doc["data"]["amount"], 10))}
                      </Td>
                      <Td>{doc["data"]["transactiontime"]}</Td>
                      <Td>
                        <Link to={`/Main/Transactiondetail/${doc.id}`}>
                          <Button colorScheme={"green"}>Detail</Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <Button colorScheme="green" size="md" onClick={createpdfevent}>
                Generate Laporan Event
              </Button>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
