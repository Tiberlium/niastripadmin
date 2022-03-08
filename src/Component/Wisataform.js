import React, { Component } from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Flex,
} from "@chakra-ui/react";

import GoogleMapReact from "google-map-react";

export default class Wisataform extends Component {
  constructor() {
    super();
    this.state = {
      lat: "b",
      long: "c",
    };
  }

  render() {
    return (
      <>
        <Text fontSize={"4xl"} padding="2">
          Wisata Form
        </Text>
        <Flex>
          <>
            <FormControl required padding={5}>
              <FormLabel htmlFor="Nama wisata">Nama Wisata</FormLabel>
              <Input
                placeholder="Nama Wisata"
                variant={"filled"}
                type={"text"}
              />
              <FormHelperText>masukkan nama tempat wisata</FormHelperText>
            </FormControl>
            <FormControl required ml={5}>
              <FormLabel htmlFor="Deskripsi">Deskripsi</FormLabel>
              <Input placeholder="Deskripsi" variant={"filled"} type={"text"} />
              <FormHelperText>masukkan deskripsi tempat wisata</FormHelperText>
            </FormControl>
            <FormControl required ml={5} mt={5}>
              <FormLabel htmlFor="Kabupaten">Kabupaten</FormLabel>
              <Input placeholder="Kabupaten" variant={"filled"} type={"text"} />
              <FormHelperText>
                masukkan kabupaten dimana tempat wisata berada
              </FormHelperText>
            </FormControl>
            <FormControl required ml={5} mt={5}>
              <FormLabel htmlFor="Kecamatan">Kecamatan</FormLabel>
              <Input placeholder="Kecamatan" variant={"filled"} type={"text"} />
            </FormControl>
          </>
          <Box width="40%" height={300} mt={10} alignSelf="flex-end">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyD5XWimbhan8mN0-wVAIG87RvBDA13fdy0",
              }}
              defaultCenter={{
                lat: 1.204274087096239,
                lng: 97.52212877347822,
              }}
              defaultZoom={10}
            />
          </Box>
        </Flex>
      </>
    );
  }
}
