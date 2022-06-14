import React from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import {
  IoPartlySunny,
  IoBeer,
  IoCalendarNumber,
  IoBed,
  IoRestaurant,
  IoChevronForwardSharp,
} from "react-icons/io5";

import { Link } from "react-router-dom";

export default function Manage() {
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<IoChevronForwardSharp color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Manage">
            Manage
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontWeight={"semibold"} fontSize={30} pb={5}>
        Manage
      </Text>
      <VStack spacing={"5"}>
        <HStack spacing={2}>
          <Link to="/Wisata">
            <Box
              h={"44"}
              width={"80"}
              borderWidth={1}
              borderRadius={20}
              p={5}
              backgroundColor="green.400"
            >
              <IoPartlySunny color="white" size={50} />
              <Text fontSize={"2xl"} fontWeight={"medium"} mt={5} color="white">
                Tempat Wisata
              </Text>
            </Box>
          </Link>
          <Link to="/Event">
            <Box
              h={"44"}
              width={"80"}
              borderWidth={1}
              borderRadius={20}
              p={5}
              backgroundColor="blue.400"
            >
              <IoCalendarNumber color="white" size={50} />
              <Text fontSize={"2xl"} fontWeight={"medium"} mt={5} color="white">
                Event
              </Text>
            </Box>
          </Link>
          <Link to="/Restoran">
            <Box
              h={"44"}
              w={"80"}
              borderWidth={1}
              borderRadius={20}
              p={5}
              backgroundColor="gray.400"
            >
              <IoRestaurant color="white" size={50} />
              <Text fontSize={"2xl"} fontWeight={"medium"} mt={5} color="white">
                Restoran
              </Text>
            </Box>
          </Link>
        </HStack>
        <HStack spacing={2}>
          <Link to="/Makanan">
            <Box
              h={"44"}
              width={"80"}
              borderWidth={1}
              borderRadius={20}
              p={5}
              backgroundColor="yellow.400"
            >
              <IoBeer color="white" size={50} />
              <Text fontSize={"2xl"} fontWeight={"medium"} mt={5} color="white">
                Makanan Tradisional
              </Text>
            </Box>
          </Link>
          <Link to="/Staycation">
            <Box
              h={"44"}
              width={"80"}
              borderWidth={1}
              borderRadius={20}
              p={5}
              backgroundColor="red.400"
            >
              <IoBed color="white" size={50} />
              <Text fontSize={"2xl"} fontWeight={"medium"} mt={5} color="white">
                Staycation
              </Text>
            </Box>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
