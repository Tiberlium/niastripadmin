import React, { Component } from "react";
import { Image, Box, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";

export default class Detailuser extends Component {
  render() {
    return (
      <Center padding={10}>
        <Wrap spacing="100px">
          <WrapItem>
            <Image
              boxSize={"150px"}
              objectFit="cover"
              alt="theres no image user"
              src="https://placeimg.com/640/480/people"
              borderRadius={"full"}
            />
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Nama</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  xason Mratz
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Alamat</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  Jason Mratz
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Email</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  Jason Mratz
                </Text>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Gender</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  Jason Mratz
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Telephone</Text>
                <Text color={"gray.500"}>Jason Mratz</Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Kewarganegaraan</Text>
                <Text color={"gray.500"}>Jason Mratz</Text>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    );
  }
}
