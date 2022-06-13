import React from "react";
import { Box, Text} from "@chakra-ui/react";
import Headertransaksi from "../../Component/Headertransaksi";
import Cardinfopembayaran from "../../Component/Cardinfopembayaran";

export default function Transactiondetail() {
  return (
    <Box marginTop="-80">
      <Text fontSize="5xl" marginBottom="10">
        Detail Transaksi
      </Text>
      <Headertransaksi />
      <Cardinfopembayaran/>
    </Box>
  );
}
