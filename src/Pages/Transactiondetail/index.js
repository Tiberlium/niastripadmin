import React from "react";
import { Box, Text} from "@chakra-ui/react";
import Headertransaksi from "../../Component/Headertransaksi";
import Cardinfopembayaran from "../../Component/Cardinfopembayaran";
import Carddetailorder from '../../Component/Carddetailorder';

export default function Transactiondetail() {
  return (
    <Box marginTop='-50'>
      <Text fontSize="5xl" marginBottom="10">
        Detail Transaksi
      </Text>
      <Headertransaksi />
      <Cardinfopembayaran/>
      <Carddetailorder/>
    </Box>
  );
}
