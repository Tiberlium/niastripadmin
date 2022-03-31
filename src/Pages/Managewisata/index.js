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
import { storages, db } from "../../Firebase";

export default class Managewisata extends Component {
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
    };
  }
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");

  async handleUpload() {
    const promises = this.state.images.map((doc) => {
      const uploadTask = storages.ref(`images/${doc.file.name}`);
      return uploadTask.put(doc.file).then(() => uploadTask.getDownloadURL());
    });

    Promise.all(promises)
      .then((filedownloadurl) => {
        db.collection("Wisata").add({
          Nama: this.state.nama,
          Deskripsi: this.state.deskripsi,
          Kabupaten: this.state.kabupaten,
          Kecamatan: this.state.kecamatan,
          Kategori: "Tempat wisata",
          Latitude: this.state.latitude,
          Longitude: this.state.longitude,
          Galery: filedownloadurl,
          Gambar: filedownloadurl[0],
        });
      })
      .then(() => {
        alert("berhasil upload");
        this.setState({ nama: "" });
        this.setState({ deskripsi: "" });
        this.setState({ kabupaten: "" });
        this.setState({ kecamatan: "" });
        this.setState({ latitude: 0 });
        this.setState({ longitude: 0 });
        this.setState({ images: [] });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
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
              <Uploadfile
                file={(images) => this.setState({ images: images })}
              />
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
      </>
    );
  }
}
