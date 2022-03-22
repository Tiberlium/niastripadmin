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
import Mapmodal from "./Atom/Mapmodal";
import Uploadfile from "./Atom/Uploadfile";
import { App, storages } from "../Firebase";

export default class Wisataform extends Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      images: [],
      open: false,
      latitude: 0,
      longitude: 0,
      nama: "",
      deskripsi: "",
      kabupaten: "",
      kecamatan: "",
      progres: 0,
      urls: [],
    };
  }
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");

  async handleUpload() {
    const promises = [];
    this.state.images.map((doc) => {
      const uploadTasks = storages.ref(`images/${doc.file.name}`).put(doc.file);
      promises.push(uploadTasks);
      uploadTasks.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progres: progress });
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storages
            .ref("images")
            .child(doc.file.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ urls: [...this.state.urls, url] });
            });
        }
      );
    });

    return Promise.all(promises)
      .then(() => alert("semua telah terupload"))
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.urls);
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
          lat={(lat) => this.setState({ latitude: lat })}
          long={(long) => this.setState({ longitude: long })}
        />
        <Box>
          <Text fontSize={"4xl"} padding="2">
            Wisata Form
          </Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required ml={5} mt={5} mb={5}>
                  <FormLabel htmlFor="Nama wisata">Nama Wisata</FormLabel>
                  <Input
                    placeholder="Nama Wisata"
                    variant={"filled"}
                    type={"text"}
                    value={this.state.nama}
                    onChange={(e) => this.setState({ nama: e.target.value })}
                  />
                  <FormHelperText>masukkan nama tempat wisata</FormHelperText>
                </FormControl>
                <FormControl required ml={5}>
                  <FormLabel htmlFor="Deskripsi">Deskripsi</FormLabel>
                  <Textarea
                    placeholder="masukkan deskripsi"
                    variant={"filled"}
                    value={this.state.deskripsi}
                    onChange={(e) =>
                      this.setState({ deskripsi: e.target.value })
                    }
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
                    value={this.state.kabupaten}
                    onChange={(e) =>
                      this.setState({ kabupaten: e.target.value })
                    }
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
                    value={this.state.kecamatan}
                    onChange={(e) =>
                      this.setState({ kecamatan: e.target.value })
                    }
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
          <Box>
            <Uploadfile file={(images) => this.setState({ images: images })} />
          </Box>
          <Button
            colorScheme={"blue"}
            marginTop={"6"}
            width={"full"}
            alignSelf={"center"}
            onClick={this.handleUpload}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    );
  }
}
