import { Box, Text, HStack } from "@chakra-ui/react";



export default function Carddetailpelanggan() {
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
          James gwee
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Telepon
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          08242555323
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Email
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          Jamesgwee@gmail.com
        </Text>
      </HStack>
      <HStack justifyContent="space-between" mt={2} mb={2}>
        <Text fontWeight="semibold" color="blackAlpha.800" fontSize="medium">
          Alamat
        </Text>
        <Text color="blackAlpha.600" fontSize="small">
          jln pattimura no.22
        </Text>
      </HStack>
    </Box>
  );
}
