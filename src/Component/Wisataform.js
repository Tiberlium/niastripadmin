import React, { Component } from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Wrap,
  WrapItem,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";

import { Map } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import Dropzone from "react-dropzone";

export default class Wisataform extends Component {
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");
  render() {
    return (
      <Flex
        flexDirection={"row"}
        wrap
        justifyContent={"space-evenly"}
        w={[500, 700, 1300]}
        h={{ base: "100%", md: "50%", xl: "25%" }}
      >
        <Box>
          <Text fontSize={"4xl"} padding="2">
            Wisata Form
          </Text>
          <Wrap>
            <WrapItem>
              <Box>
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
                  <Textarea
                    placeholder="masukkan deskripsi"
                    variant={"filled"}
                  />
                  <FormHelperText>
                    masukkan deskripsi tempat wisata
                  </FormHelperText>
                </FormControl>
                <FormControl required ml={5} mt={5}>
                  <FormLabel htmlFor="Kabupaten">Kabupaten</FormLabel>
                  <Input
                    placeholder="Kabupaten"
                    variant={"filled"}
                    type={"text"}
                  />
                  <FormHelperText>
                    masukkan kabupaten dimana tempat wisata berada
                  </FormHelperText>
                </FormControl>
                <FormControl required ml={5} mt={5}>
                  <FormLabel htmlFor="Kecamatan">Kecamatan</FormLabel>
                  <Input
                    placeholder="Kecamatan"
                    variant={"filled"}
                    type={"text"}
                  />
                </FormControl>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box marginTop={"20"} marginLeft={10}>
          <FormLabel>Lokasi Wisata</FormLabel>
          <Map
            provider={this.maptilerProvider}
            height={200}
            width={350}
            dprs={[1, 2]}
            defaultCenter={[1.1603381323455186, 97.52212877347822]}
            defaultZoom={11}
          />
          <Dropzone onDrop={(acceptedfiles) => console.log(acceptedfiles)}>
            {({ getInputProps, getRootProps }) => (
              <>
                <FormLabel marginTop={10}>Upload Gambar</FormLabel>
                <Box
                  {...getRootProps()}
                  height={"100"}
                  width={"90"}
                  borderWidth={"thin"}
                  borderColor={"blackAlpha.400"}
                  borderRadius={5}
                >
                  <Input {...getInputProps()} />
                  <Text
                    fontSize={"15"}
                    color={"gray.400"}
                    textAlign={"center"}
                    marginTop={"8"}
                  >
                    Drag 'n' drop some files here, or click to select files
                  </Text>
                </Box>
              </>
            )}
          </Dropzone>
          <Button
            colorScheme={"blue"}
            marginTop={"6"}
            width={[100, 300, 350]}
            alignSelf={'center'}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    );
  }
}
