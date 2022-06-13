import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import Headertransaksi from "../../Component/Headertransaksi";
import Cardinfopembayaran from "../../Component/Cardinfopembayaran";
import Carddetailorder from "../../Component/Carddetailorder";
import Carddetailpelanggan from "../../Component/Carddetailpelanggan";
import { db } from "../../Firebase";
import { useParams } from "react-router-dom";

export default function Transactiondetail() {
  const [data, setdata] = React.useState({});
  const { id } = useParams();

  

  const get = async () => {
    const docRef = await db.collection("Transaksi").doc(id).get();

    setdata(docRef.data());
  };

  React.useEffect(() => {
    get();
  }, []);
  return (
    <Box marginTop="-50">
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
          currency={data.currency}
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
