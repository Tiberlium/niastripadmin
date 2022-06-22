import React from "react";
import {
  Box,
  Text,
  Input,
  Button,
  FormLabel,
  FormControl,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function Change() {
  const Currentpass = () => {
    return (
      <FormControl w="2xs" mt="5">
        <FormLabel>Masukkan Sandi Sekarang</FormLabel>
        <Input id="password" type="password" placeholder="sandi" />
      </FormControl>
    );
  };

  return (
    <Box w={"3xl"}>
      <Breadcrumb
        spacing="8px"
        separator={<FiChevronRight color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Sandi Sekarang
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="5xl">Ubah sandi</Text>
      <Currentpass />
      <Button mt="5" colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
}
