import { Box, Text, HStack } from "@chakra-ui/react";

export default function Cardinfopembayaran({ orderid, jumlah, metode }) {
  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }
  return (
    <Box
      width={["2xs", "3xs", "3xl", "4xl"]}
      mt="10"
      p="5"
      boxShadow="base"
      borderRadius={10}
    >
      <Text fontSize="large">Informasi Pembayaran</Text>
      <HStack mt={5}>
        <Box
          padding={2}
          backgroundColor="gray.100"
          w="full"
          borderRadius={10}
        >
          <Text fontSize="medium" color="GrayText">
            Orderid
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            {orderid}
          </Text>
        </Box>
        <Box
          padding={2}
          backgroundColor="gray.100"
          w="full"
          borderRadius={10}
        >
          <Text fontSize="medium" color="GrayText">
            Jumlah
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            {formatRupiah(jumlah)}
          </Text>
        </Box>
        <Box
          padding={2}
          backgroundColor="gray.100"
          borderRadius={10}
          width="full"
        >
          <Text fontSize="medium" color="GrayText">
            Metode Pembayaran
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            {metode}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
