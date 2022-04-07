import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {
  IoPartlySunny,
  IoBeer,
  IoCalendarNumber,
  IoBed,
} from "react-icons/io5";

export default function Manage() {
  return (
    <Box>
      <Text fontWeight={"semibold"} fontSize={25} pb={5}>
        Manage
      </Text>
      <VStack>
        <HStack>
          <Box
            h={"56"}
            width={"96"}
            borderWidth={1}
            borderRadius={20}
            p={5}
            bgGradient="linear(to-r, #544a7d,#ffd452)"
          >
            <IoPartlySunny color="white" size={50} />
            <Text fontSize={"3xl"} fontWeight={"medium"} mt={5} color="white">
              Tempat Wisata
            </Text>
          </Box>
          <Box
            h={"56"}
            width={"96"}
            borderWidth={1}
            borderRadius={20}
            p={5}
            bgGradient="linear(to-r,#009FFF,#ec2F4B)"
          >
            <IoCalendarNumber color="white" size={50} />
            <Text fontSize={"3xl"} fontWeight={"medium"} mt={5} color="white">
              Event
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Box
            h={"56"}
            width={"96"}
            borderWidth={1}
            borderRadius={20}
            p={5}
            bgGradient="linear(to-r,#0f0c29,#302b63,#24243e)"
          >
            <IoBeer color="white" size={50} />
            <Text fontSize={"3xl"} fontWeight={"medium"} mt={5} color="white">
              Makanan Tradisional
            </Text>
          </Box>
          <Box
            h={"56"}
            width={"96"}
            borderWidth={1}
            borderRadius={20}
            p={5}
            bgGradient="linear(to-r,#40E0D0,#FF8C00,#FF0080)"
          >
            <IoBed color="white" size={50} />
            <Text fontSize={"3xl"} fontWeight={"medium"} mt={5} color="white">
              Staycation
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
