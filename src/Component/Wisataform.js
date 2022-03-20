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

import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import ImageUploading from "react-images-uploading";
import Imagescard from "./Atom/Imagescard";
import Mapmodal from "./Atom/Mapmodal";
import { AiOutlineUpload } from "react-icons/ai";

export default class Wisataform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      open: false,
    };
  }
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");

  onChange = (imageList, addUpdateIndex) => {
    this.setState({ images: imageList });
  };

  render() {
    return (
      <Flex
        flexDirection={"row"}
        wrap
        justifyContent={"space-evenly"}
        w={[500, 700, 1300]}
        h={{ base: "100%", md: "50%", xl: "25%" }}
      >
        <Mapmodal
          open={this.state.open}
          close={() => this.setState({ open: false })}
        />
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
            defaultZoom={9}
            onClick={() => this.setState({ open: true })}
          >
            <Marker latLngToPixel={[1.1603381323455186, 97.52212877347822]} />
          </Map>
          <Box/>
          <Button
            colorScheme={"blue"}
            marginTop={"6"}
            width={[100, 300, 350]}
            alignSelf={"center"}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    );
  }
}
