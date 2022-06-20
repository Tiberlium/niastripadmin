import React from "react";
import {
  Box,
  Input,
  Image,
  Button,
  Center,
  Text,
  InputGroup,
  InputRightElement,
  FormLabel,
} from "@chakra-ui/react";

import Logo from "../../Asset/Logo.png";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
            Silakan Login untuk mendapatkan akses
          </Text>
          <Center>
            <InputGroup size="md" w="80" mt={10}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Center>
        </Box>
      </Center>
    </div>
  );
}
