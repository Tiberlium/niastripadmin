import React from "react";
import {
  Box,
  Text,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Headertransaksi from "../../Component/Headertransaksi";
import Cardinfopembayaran from "../../Component/Cardinfopembayaran";
import Carddetailorder from "../../Component/Carddetailorder";
import Carddetailpelanggan from "../../Component/Carddetailpelanggan";
import { db } from "../../Firebase";
import { useParams, Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

export default function Transactiondetail() {
  const [data, setdata] = React.useState({});
  const { id } = useParams();

  const get = async () => {
    const docRef = await db.collection("Transaksi").doc(id).get();

    setdata(docRef.data());
  };


  React.useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);


  
  return (
    <Box marginTop="-50">
      <Breadcrumb
        spacing="8px"
        separator={<BsChevronRight color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Transaction">
            Transaksi
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Detail transaksi
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="5xl" marginBottom="10">
        Detail Transaksi
      </Text>
      <Headertransaksi />
      <Cardinfopembayaran
        orderid={data.orderid}
        jumlah={data.amount}
        metode={data.metode}
      />
      <HStack spacing="8px">
        <Carddetailorder
          orderid={data.orderid}
          metode={data.metode}
          jumlah={data.amount}
          idtransaksi={data.transactionid}
          waktu={data.transactiontime}
          jenis={data.jenis}
        />
        <Carddetailpelanggan
          nama={data.customername}
          telepon={data.customerphone}
          email={data.customeremail}
          alamat={data.customeraddress}
        />
      </HStack>
    </Box>
  );
}
