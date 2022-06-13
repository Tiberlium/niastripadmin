import { Box, Text, HStack } from "@chakra-ui/react";

export default function Carddetailpelanggan({ nama, telepon, email, alamat }) {
  return (
    <Box p="5" boxShadow="base" width="full" borderRadius={10}>
      <Text fontSize="large" marginBottom="5">
        Detail Pelanggan
      </Text>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Nama
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {nama}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Telepon
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {telepon}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Email
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {email}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Alamat
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          {alamat}
        </Text>
      </HStack>
    </Box>
  );
}
