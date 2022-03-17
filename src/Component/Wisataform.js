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
} from "@chakra-ui/react";

import { Map } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

export default class Wisataform extends Component {
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");
  render() {
    return (
      <>
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
                <Textarea placeholder="masukkan deskripsi" variant={"filled"} />
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
          <WrapItem>
            <Map
              provider={this.maptilerProvider}
              height={400}
              dprs={[1, 2]}
              defaultCenter={[1.1603381323455186, 97.52212877347822]}
              defaultZoom={11}
            />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
