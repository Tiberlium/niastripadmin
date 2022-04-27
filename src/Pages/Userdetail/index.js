import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Userdetail() {

  const {id} = useParams();
  
  console.log(id);
  return (
    <Box>
      <Text>ini adalah text</Text>
    </Box>
  );
}
