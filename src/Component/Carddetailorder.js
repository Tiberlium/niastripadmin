import { Box, HStack, Text } from "@chakra-ui/react";

export default function Carddetailorder({
  orderid,
  metode,
  jumlah,
  idtransaksi,
  waktu,
  jenis,
}) {
  function trunctext(text) {
    return text?.length > 20 ? `${text.substr(0, 20)}...` : text;
  }

  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  return (
    <Box p="5" mt="16" boxShadow="base" width="full" borderRadius={10}>
      <Text fontSize="large" marginBottom="5">
        Detail pemesanan
      </Text>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Id pemesanan
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {trunctext(orderid)}
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
          {formatRupiah(jumlah)}
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
          Jenis
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {jenis}
        </Text>
      </HStack>
    </Box>
  );
}
