import { Box, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import {} from "react-icons/io";

export default class Card extends Component {
  render() {
    return (
      <div>
        <Box
          bgGradient={this.props.bgGradient}
          w="100%"
          color="white"
          width={[150, 200, 250]}
          height={32}
          borderRadius={10}
          pl={10}
          pt={3}
        >
          <Text fontSize="md">{this.props.label}</Text>
          <Text fontSize="4xl" fontWeight="bold">
            {this.props.number}
          </Text>
        </Box>
      </div>
    );
  }
}
