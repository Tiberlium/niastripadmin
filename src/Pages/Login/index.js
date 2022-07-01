import React, { useState } from "react";
import {
  Box,
  Input,
  Image,
  Button,
  Center,
  Text,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import Logo from "../../Asset/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [invalid, setinvalid] = useState(false);

  const toast = useToast();

  const navigation = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (pass != "admin") {
        toast({
          title: "Gagal masuk",
          description: "Sandi tidak cocok ",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setinvalid(true);
        setPass("");
      } else {
        localStorage.setItem("token", "true");
        navigation("/Main", { replace: true });
      }
    }
  };

  const submit = () => {
    if (pass !== "admin") {
      toast({
        title: "Gagal masuk",
        description: "Sandi tidak cocok",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setinvalid(true);
      setPass("");
    } else {
      localStorage.setItem("token", "true");
      navigation("/Main", { replace: true });
    }
  };


  return (
    <div>
      <Center padding={10}>
        <Box
          w={[200, 300, 400]}
          p={5}
          bg="white"
          border="1px"
          borderColor="gray.200"
          rounded="lg"
          boxShadow="lg"
          mt={20}
        >
          <Center p={10}>
            <Image
              src={Logo}
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
            />
          </Center>
          <Text align="center" color="grey">
            Nias Trip Admin
          </Text>
          <Center>
            <InputGroup
              size="md"
              w="80"
              mt={10}
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              onKeyDown={handleKeyDown}
            >
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Masukkan sandi"
                errorBorderColor="crimson"
                isInvalid={invalid}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Center>
          <Center>
            <Button colorScheme="blue" mt="10" w="36" onClick={submit}>
              Masuk
            </Button>
          </Center>
        </Box>
      </Center>
    </div>
  );
}
