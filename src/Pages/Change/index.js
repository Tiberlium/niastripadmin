import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function Change() {
  const [pass, setpass] = useState("");
  const [repass, setrepass] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  function changepass() {
    if (pass === repass) {
      localStorage.setItem("user", pass);
      toast({
        title: "password berhasil admin diganti",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
      localStorage.setItem("token", "false");
    } else {
      toast({
        title: "Kesalahan",
        description: "Password tidak sama",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return false;
    }
  }

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
            Sandi
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize="5xl">Ubah sandi</Text>
      <FormControl w="2xs" mt="5">
        <FormLabel>Masukkan sandi baru</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="sandi baru"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <FormLabel mt="10">Ulangi Sandi baru</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="ulangi sandi baru"
          value={repass}
          onChange={(e) => setrepass(e.target.value)}
        />
        <Button mt="5" colorScheme="blue" onClick={changepass}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
