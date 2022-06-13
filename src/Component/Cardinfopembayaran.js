import { Box, Text, HStack } from "@chakra-ui/react";
export default function Cardinfopembayaran() {
  return (
    <Box width={["2xs", "3xs", "3xl", "4xl"]} mt="10" p="5" boxShadow="base" borderRadius={10}>
      <Text fontSize="large">Informasi Pembayaran</Text>
      <HStack>
        <Box
          padding={2}
          backgroundColor="gray.100"
          mt={2}
          w="fit-content"
          borderRadius={10}
        >
          <Text fontSize="medium" color="GrayText">
            Orderid
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            orderIdyzyufPQLs7QxBgHmeXsiQ8Lt9ou11655052541761
          </Text>
        </Box>
        <Box
          padding={2}
          backgroundColor="gray.100"
          mt={2}
          w="fit-content"
          borderRadius={10}
          width="2xs"
        >
          <Text fontSize="medium" color="GrayText">
            Jumlah
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            Rp 1.700.000
          </Text>
        </Box>
        <Box
          padding={2}
          backgroundColor="gray.100"
          mt={2}
          w="fit-content"
          borderRadius={10}
          width="2xs"
        >
          <Text fontSize="medium" color="GrayText">
            Metode Pembayaran
          </Text>
          <Text fontSize="small" color="blackAlpha.900">
            Bca klikpay
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
