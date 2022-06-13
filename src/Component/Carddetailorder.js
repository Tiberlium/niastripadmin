import { Box, HStack, Text } from "@chakra-ui/react";

export default function Carddetailorder() {
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
          orderIdyzyufPQLs7QxBgHmeXsiQ8Lt9ou11655052541761
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Tipe pembayaran
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Bca klikpay
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Jumlah
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Rp 50000
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Id transaksi
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          ffcab911-2edc-4354-ba33-6fce07bb6de3
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Waktu
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Yesterday, 11:49 pm
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
