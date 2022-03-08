import React, { Component } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import {} from '@chakra-ui/icons'

import Logo from "../../Asset/Logo.png";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
            <FormControl id="email" pt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Center pt={10}>
              <Button colorScheme="blue">Masuk</Button>
            </Center>
          </Box>
        </Center>
      </div>
    );
  }
}
