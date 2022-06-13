import React from "react";
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
} from "@chakra-ui/react";

import { db } from "../../Firebase";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Transaction() {
  const [data, setdata] = React.useState([]);

  const formmatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const stringTruncate = (str, length) => {
    const dots = str.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Transaksi").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setdata(x);
  };

  React.useEffect(() => {
    get();
  }, []);
  return (
    <Box>
      <Text fontSize={"5xl"} color="blackAlpha">
        Transaksi
      </Text>
      <Table variant={"striped"}>
        <TableCaption>Transaksi</TableCaption>
        <Thead>
          <Th>No</Th>
          <Th>Id order</Th>
          <Th>Pengguna</Th>
          <Th>Metode pembayaran</Th>
          <Th>Jumlah</Th>
          <Th>Detail</Th>
        </Thead>
        <Tbody>
          {data.map((doc, index) => (
            <Tr key={doc.id}>
              <Td>{index + 1}</Td>
              <Td>{stringTruncate(doc.data.orderid, 20)}</Td>
              <Td>{doc.data.customername}</Td>
              <Td>{doc.data.metode}</Td>
              <Td>{formmatter.format(doc.data.amount)}</Td>
              <Td>
                <Link to={`/Transactiondetail/${doc.id}`}>
                  <Button
                    colorScheme={"green"}
                    variant="solid"
                    size="sm"
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
    </Box>
  );
}
