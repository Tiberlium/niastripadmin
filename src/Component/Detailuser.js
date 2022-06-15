import React, { Component } from "react";
import { Image, Box, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";

export default class Detailuser extends Component {
  render() {
    return (
      <Center padding={10} borderWidth={1} width='4xl' mb={10} borderRadius={10} bgColor='white' boxShadow='md' mt={10}>
        <Wrap spacing="100px">
          <WrapItem>
            <Image
              boxSize={"120px"}
              objectFit="cover"
              alt="theres no user image"
              src={this.props.gambar}
              borderRadius='md'
            />
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Nama</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  {this.props.nama}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Alamat</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  {this.props.alamat}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Email</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  {this.props.email}
                </Text>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Gender</Text>
                <Text color={"gray.500"} textTransform="capitalize">
                  {this.props.gender}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Telephone</Text>
                <Text color={"gray.500"}>{this.props.phone}</Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"}>Kewarganegaraan</Text>
                <Text color={"gray.500"}>{this.props.nation}</Text>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    );
  }
}
