import React, { Component } from "react";
import { Box, Text, Center } from "@chakra-ui/react";

export default class GraphicCard extends Component {
  render() {
    return (
      <div>
        <Center>
          <Box
            bg="white"
            w={[400, 700, 800]}
            borderRadius={10}
            boxShadow="lg"
            mt={10}
            alignSelf="center"
          >
            <Text fontWeight="bold" fontSize="large" ml={5}>
              OverView
            </Text>

            <Text ml={5} color="gray.500">
              lihat kinerja dari app anda
            </Text>
          </Box>
        </Center>
      </div>
    );
  }
}
