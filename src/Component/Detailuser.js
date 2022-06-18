import React, { Component } from "react";
import {
  Image,
  Box,
  Text,
  Wrap,
  WrapItem,
  Center,
  VStack,
} from "@chakra-ui/react";

export default class Detailuser extends Component {
  render() {
    return (
      <Center
        paddingTop={10}
        borderWidth={1}
        width="3xl"
        mb={10}
        borderRadius={10}
        bgColor="white"
        boxShadow="md"
        mt={10}
      >
        <Wrap spacing="10">
          <WrapItem>
            <Image
              boxSize={"150px"}
              objectFit="cover"
              alt="theres no user image"
              src={this.props.gambar}
              borderRadius="full"
            />
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Id
                </Text>
                <Text
                  color={"gray.500"}
                  textTransform="capitalize"
                  fontSize="sm"
                >
                  {this.props.id}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Nama
                </Text>
                <Text
                  color={"gray.500"}
                  textTransform="capitalize"
                  fontSize="sm"
                >
                  {this.props.nama}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Alamat
                </Text>
                <Text
                  color={"gray.500"}
                  textTransform="capitalize"
                  fontSize="sm"
                >
                  {this.props.alamat}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Email
                </Text>
                <Text
                  color={"gray.500"}
                  textTransform="capitalize"
                  fontSize="sm"
                >
                  {this.props.email}
                </Text>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Gender
                </Text>
                <Text
                  color={"gray.500"}
                  textTransform="capitalize"
                  fontSize="sm"
                >
                  {this.props.gender}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Telephone
                </Text>
                <Text color={"gray.500"} fontSize="sm">
                  {this.props.phone}
                </Text>
              </Box>
              <Box marginBottom={5}>
                <Text fontWeight={"bold"} fontSize="sm">
                  Kewarganegaraan
                </Text>
                <Text color={"gray.500"} fontSize="sm">
                  {this.props.nation}
                </Text>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    );
  }
}
