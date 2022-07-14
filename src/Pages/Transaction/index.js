import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableCaption,
  Text,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  TableContainer,
  Center,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { db } from "../../Firebase";
import { Link } from "react-router-dom";
import {
  BsFillInfoCircleFill,
  BsChevronRight,
  BsFillFileEarmarkPdfFill,
  BsSearch,
} from "react-icons/bs";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import img from "../../Asset/Logo.png";
import dayjs from "dayjs";

export default function Transaction() {
  const [reservation, setreservation] = useState([]);
  const [event, setevent] = useState([]);

  const [startdatereserve, setstartdatereserve] = useState(new Date());
  const [endatereserve, setendatereserve] = useState(new Date());

  const [startdateevent, setstartdateevent] = useState(new Date());
  const [enddateevent, setenddateevent] = useState(new Date());

  const [Queryreserve, setQueryreserve] = useState("");
  const [Queryevent, setQueryevent] = useState("");

  let totalTransaksievent = 0;
  let pendapatanEvent = 0;

  let totalTransaksireservation = 0;
  let pendapatanreservation = 0;

  const today = new Date();

  function Percentage(num, per) {
    return (num / 100) * per;
  }

  function formatter(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  const totalTransact = reservation.map((doc) => {
    return (totalTransaksireservation += Number(doc["amount"]));
  });

  const withdrawal = reservation.map((doc) => {
    return (pendapatanreservation += Percentage(Number(doc["amount"]), 10));
  });

  const totalTransactevent = event.map((doc) => {
    return (totalTransaksievent += Number(doc["amount"]));
  });

  const withdrawalevent = event.map((doc) => {
    return (pendapatanEvent += Percentage(Number(doc["amount"]), 10));
  });

  const stringTruncate = (str, length) => {
    const dots = str.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };

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
        stringTruncate(item["orderid"], 20),
        item["nama"],
        item["jenis"],
        formatter(item["amount"]),
        formatter(Percentage(item["amount"], 10)),
        item["tanggal"],
      ]),
      additionalRows: [
        {
          col1: "Total:",
          col2: `${formatter(Number(totalTransaksireservation))}`,
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
          col2: `${formatter(Number(pendapatanreservation))}`,
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
      table: event.map((item, index) => [
        index + 1,
        stringTruncate(item["orderid"], 20),
        item["nama"],
        item["jenis"],
        formatter(item["amount"]),
        formatter(Percentage(item["amount"], 10)),
        item["tanggal"],
      ]),
      additionalRows: [
        {
          col1: "Total:",
          col2: `${formatter(Number(totalTransaksievent))}`,
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
          col2: `${formatter(Number(pendapatanEvent))}`,
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

  const getreservation = async () => {
    let x = [];
    let reservedata = [];
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
    x.map((doc) => {
      let data = doc["data"]["transactiontime"];
      let splitdate = new Array();
      splitdate = data.split(" ");

      reservedata.push({
        id: doc["id"],
        orderid: doc["data"]["orderid"],
        nama: doc["data"]["nama"],
        jenis: doc["data"]["jenis"],
        amount: doc["data"]["amount"],
        metode: doc["data"]["metode"],
        tanggal: splitdate[0],
        waktu: splitdate[1],
      });
    });

    setreservation(reservedata);
  };

  const getevent = async () => {
    let x = [];
    let eventdata = [];
    const docRef = await db
      .collection("Transaksi")
      .where("jenis", "==", "Event")
      .get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    x.map((doc) => {
      let tgl = doc["data"]["transactiontime"];
      let splitdate = new Array();
      splitdate = tgl.split(" ");
      eventdata.push({
        id: doc["id"],
        orderid: doc["data"]["orderid"],
        nama: doc["data"]["nama"],
        jenis: doc["data"]["jenis"],
        amount: doc["data"]["amount"],
        metode: doc["data"]["metode"],
        tanggal: splitdate[0],
        waktu: splitdate[1],
      });
    });

    setevent(eventdata);
  };

  function createpdfreservation() {
    const pdfObj = jsPDFInvoiceTemplate(dataRes);
    pdfObj.jsPDFDocObject.save();
  }

  function createpdfevent() {
    const pdfObj = jsPDFInvoiceTemplate(dataEve);
    pdfObj.jsPDFDocObject.save();
  }

  useEffect(() => {
    getreservation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getevent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterreservationbydate() {
    const activities = [...reservation].filter(
      (doc) =>
        doc["tanggal"] >= dayjs(startdatereserve).format("YYYY-MM-DD") &&
        doc["tanggal"] <= dayjs(endatereserve).format("YYYY-MM-DD")
    );

    setreservation(activities);
  }
  return (
    <Box mr={10}>
      <Breadcrumb
        spacing="8px"
        separator={<BsChevronRight color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Main/Transaction">
            Transaksi
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} height="auto">
        Transaksi
      </Text>

      <Tabs isFitted mt={"10"}>
        <TabList mb="1em" w="4xl">
          <Tab>Penginapan</Tab>
          <Tab>Event</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex>
              <Box>
                <Text fontWeight={"semibold"} mb={3}>
                  Tampilkan berdasarkan Tanggal
                </Text>
                <Flex>
                  <Text mt={2}>Tanggal awal</Text>
                  <Box w={5} />
                  <Input
                    w={"fit-content"}
                    placeholder="Tanggal awal"
                    value={startdatereserve}
                    onChange={(e) => setstartdatereserve(e.target.value)}
                    type={"date"}
                    mb={5}
                  />
                </Flex>
                <Flex>
                  <Text mt={2}>Tanggal akhir</Text>
                  <Box w={5} />
                  <Input
                    w={"fit-content"}
                    placeholder="Tanggal akhir"
                    value={endatereserve}
                    onChange={(e) => setendatereserve(e.target.value)}
                    type={"date"}
                    mb={5}
                  />
                </Flex>

                <Button
                  colorScheme="blue"
                  mb={5}
                  w={"full"}
                  onClick={filterreservationbydate}
                >
                  Tampilkan
                </Button>
              </Box>
              <Spacer />
              <Box w={"80"}>
                <Text fontWeight={"semibold"} mb={2}>
                  Laporan penginapan
                </Text>
                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={createpdfreservation}
                  w={"full"}
                  h={10}
                  leftIcon={<BsFillFileEarmarkPdfFill />}
                >
                  Hasilkan pdf
                </Button>

                <Box mt={"12"}>
                  <Text mb={2} fontWeight="semibold">
                    Pencarian
                  </Text>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents={"none"}
                      children={<BsSearch />}
                    />
                    <Input
                      placeholder="Pencarian"
                      borderColor={"blackAlpha.400"}
                      type="search"
                      value={Queryreserve}
                      onChange={(e) => setQueryreserve(e.target.value)}
                    />
                  </InputGroup>
                </Box>
              </Box>
            </Flex>

            <TableContainer mb={10}>
              <Table variant={"striped"} size="sm">
                <TableCaption placement="top" mb={5}>
                  Tabel Transaksi Penginapan
                </TableCaption>
                <Thead>
                  <Th>No</Th>
                  <Th>Id pesanan</Th>
                  <Th>Nama</Th>
                  <Th>Kategori</Th>
                  <Th>Biaya</Th>
                  <Th>Metode</Th>
                  <Th>Tanggal</Th>
                  <Th>Waktu</Th>
                  <Th>Detail</Th>
                </Thead>
                <Tbody>
                  {reservation
                    .filter((doc) =>
                      doc["nama"]
                        ?.toLowerCase()
                        .match(Queryreserve.toLowerCase())
                    )
                    .map((doc, index) => {
                      return (
                        <Tr key={doc["id"]}>
                          <Td>{index + 1}</Td>
                          <Td>{stringTruncate(doc["orderid"], 20)}</Td>
                          <Td>{stringTruncate(doc["nama"], 9)}</Td>
                          <Td>{doc["jenis"]}</Td>
                          <Td>{formatter(doc["amount"])}</Td>
                          <Td>{doc["metode"]}</Td>
                          <Td>{doc["tanggal"]}</Td>
                          <Td>{doc["waktu"]}</Td>
                          <Td>
                            <Link to={`/Main/Transactiondetail/${doc.id}`}>
                              <Button
                                colorScheme={"blue"}
                                leftIcon={<BsFillInfoCircleFill />}
                              >
                                Detail
                              </Button>
                            </Link>
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <Flex>
              <Box>
                <Text fontWeight={"semibold"} mb={3}>
                  Tampilkan berdasarkan Tanggal
                </Text>
                <Flex>
                  <Text mt={2}>Tanggal awal</Text>
                  <Box w={5} />
                  <Input
                    w={"fit-content"}
                    placeholder="Tanggal awal"
                    value={startdateevent}
                    onChange={(e) => setstartdateevent(e.target.value)}
                    type={"date"}
                    mb={5}
                  />
                </Flex>
                <Flex>
                  <Text mt={2}>Tanggal akhir</Text>
                  <Box w={5} />
                  <Input
                    w={"fit-content"}
                    placeholder="Tanggal akhir"
                    value={enddateevent}
                    onChange={(e) => setenddateevent(e.target.value)}
                    type={"date"}
                    mb={5}
                  />
                </Flex>

                <Button
                  colorScheme="green"
                  mb={5}
                  w={"full"}
                  onClick={filterreservationbydate}
                >
                  Tampilkan
                </Button>
              </Box>
              <Spacer />
              <Box w={"80"}>
                <Text fontWeight={"semibold"} mb={2}>
                  Laporan Event
                </Text>
                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={createpdfreservation}
                  w={"full"}
                  h={10}
                  leftIcon={<BsFillFileEarmarkPdfFill />}
                >
                  Hasilkan pdf
                </Button>

                <Box mt={"12"}>
                  <Text mb={2} fontWeight="semibold">
                    Pencarian
                  </Text>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents={"none"}
                      children={<BsSearch />}
                    />
                    <Input
                      placeholder="Pencarian"
                      borderColor={"blackAlpha.400"}
                      type="search"
                      value={Queryevent}
                      onChange={(e) => setQueryevent(e.target.value)}
                    />
                  </InputGroup>
                </Box>
              </Box>
            </Flex>

            <TableContainer mb={10}>
              <Table variant={"striped"} size="sm">
                <TableCaption placement="top" mb={5}>
                  Data Transaksi Event
                </TableCaption>
                <Thead>
                  <Th>No</Th>
                  <Th>Id pesanan</Th>
                  <Th>Nama</Th>
                  <Th>Kategori</Th>
                  <Th>Biaya</Th>
                  <Th>Metode</Th>
                  <Th>Tanggal</Th>
                  <Th>Waktu</Th>
                  <Th>Detail</Th>
                </Thead>
                <Tbody>
                  {event
                    .filter((doc) =>
                      doc["nama"].toLowerCase().match(Queryevent.toLowerCase())
                    )
                    .map((doc, index) => (
                      <Tr key={doc["id"]}>
                        <Td>{index + 1}</Td>
                        <Td>{stringTruncate(doc["orderid"], 20)}</Td>
                        <Td>{stringTruncate(doc["nama"], 9)}</Td>
                        <Td>{doc["jenis"]}</Td>
                        <Td>{formatter(doc["amount"])}</Td>
                        <Td>{doc["metode"]}</Td>
                        <Td>{doc["tanggal"]}</Td>
                        <Td>{doc["waktu"]}</Td>
                        <Td>
                          <Link to={`/Main/Transactiondetail/${doc.id}`}>
                            <Button
                              colorScheme={"green"}
                              leftIcon={<BsFillInfoCircleFill />}
                            >
                              Detail
                            </Button>
                          </Link>
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
