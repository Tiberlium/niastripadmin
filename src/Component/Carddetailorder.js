import { Box, HStack, Text } from "@chakra-ui/react";

export default function Carddetailorder({
  orderid,
  metode,
  jumlah,
  idtransaksi,
  waktu,
}) {
  return (
    <Box p="5" mt="16" boxShadow="base" width="full" borderRadius={10}>
      <Text fontSize="large" marginBottom="5">
        Detail Order
      </Text>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Order id
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {orderid}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Tipe pembayaran
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {metode}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Jumlah
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Rp {jumlah}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Id transaksi
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {idtransaksi}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Waktu
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {waktu}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Status
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Selesai
        </Text>
      </HStack>
    </Box>
  );
}
