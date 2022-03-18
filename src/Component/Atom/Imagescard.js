import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsFillImageFill, BsX } from "react-icons/bs";

export default class Imagescard extends Component {
  render() {
    return (
      <Box
        height={"10"}
        width={"100"}
        borderWidth={1}
        borderColor="blackAlpha.400"
        borderRadius={5}
        display="flex"
        justifyContent="space-between"
        paddingTop={1}
        marginTop={2}
      >
        <Box marginLeft={2} marginTop={1}>
          <BsFillImageFill color="blue" size={20} />
        </Box>
        <Text fontSize={15} color="gray.500" marginTop={0.5}>
          {this.props.label}
        </Text>
        <Box marginRight={2} marginTop={1} onClick={this.props.onClick}>
          <BsX color="red" size={20} />
        </Box>
      </Box>
    );
  }
}
