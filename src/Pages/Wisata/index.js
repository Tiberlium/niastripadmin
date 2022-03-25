import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import Wisatatable from "../../Component/Wisatatable";

export default class Wisata extends Component {
  render() {
    return (
      <Box paddingLeft={5} paddingRight={5}>
        <Text fontSize={30} fontWeight="bold" paddingBottom={10} marginTop={10}>
          Daftar Tempat Wisata
        </Text>
        <Wisatatable />
      </Box>
    );
  }
}
