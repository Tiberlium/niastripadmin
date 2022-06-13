import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Headertransaksi() {
  return (
    <Box
      width={["2xs", "3xs", "3xl", "4xl"]}
      height="fit-content"
      backgroundColor="blue.200"
      p="1"
      borderRadius={20}
      borderWidth="thin"
      borderColor="blue.900"
    >
      <Text fontSize="small" textAlign="center" color="blue.900">
        Transaksi telah diselesaikan
      </Text>
    </Box>
  );
}
