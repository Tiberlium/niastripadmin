import React, { useEffect, useState } from "react";
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
  Center,
  Button,
} from "@chakra-ui/react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import Uploadfile from "../../Component/Atom/Uploadfile";
import { storages, db } from "../../Firebase";
import { useParams, useLocation } from "react-router-dom";

export default function Managewisata() {
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [kabupaten, setkabupaten] = useState("");
  const [kecamatan, setkecamatan] = useState("");
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [images, setimages] = useState([]);

  const [button, setbutton] = useState("Submit");

  const maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");

  let id = useParams();
  let data = useLocation();

  function getParams() {
    if (data.state !== null) {
      setdeskripsi(data.state.Deskripsi);
      setnama(data.state.Nama);
      setlatitude(data.state.Latitude);
      setlongitude(data.state.Longitude);
      setkabupaten(data.state.Kabupaten);
      setkecamatan(data.state.Kecamatan);
      setbutton("Update");
    } else {
      return false;
    }
  }

  useEffect(() => {
    getParams();
  }, []);

  async function handleUpload() {
    const promises = images.map((doc) => {
      const uploadTask = storages.ref(`images/${doc.file.name}`);
      return uploadTask.put(doc.file).then(() => uploadTask.getDownloadURL());
    });

    Promise.all(promises)
      .then((filedownloadurl) => {
        db.collection("Wisata").add({
          Nama: nama,
          Deskripsi: deskripsi,
          Kabupaten: kabupaten,
          Kecamatan: kecamatan,
          Kategori: "Tempat wisata",
          Latitude: latitude,
          Longitude: longitude,
          Galery: filedownloadurl,
          Gambar: filedownloadurl[0],
        });
      })
      .then(() => {
        alert("berhasil upload");
        setimages([]);
        setnama("");
        setkecamatan("");
        setdeskripsi("");
        setkabupaten("");
        setlatitude(0);
        setlongitude(0);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Center>
      <Box width={"3xl"}>
        <Box>
          <Text fontSize={"4xl"}>Wisata Form</Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required width={"3xl"} mt={10}>
                  <FormLabel htmlFor="Nama wisata">Nama Wisata</FormLabel>
                  <Input
                    placeholder="Nama Wisata"
                    variant={"filled"}
                    type={"text"}
                    value={nama}
                    onChange={(e) => setnama(e.target.value)}
                  />
                  <FormHelperText>masukkan nama tempat wisata</FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Deskripsi">Deskripsi</FormLabel>
                  <Textarea
                    placeholder="masukkan deskripsi"
                    variant={"filled"}
                    value={deskripsi}
                    onChange={(e) => setdeskripsi(e.target.value)}
                  />
                  <FormHelperText>
                    masukkan deskripsi tempat wisata
                  </FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Kabupaten">Kabupaten</FormLabel>
                  <Input
                    placeholder="Kabupaten"
                    variant={"filled"}
                    type={"text"}
                    value={kabupaten}
                    onChange={(e) => setkabupaten(e.target.value)}
                  />
                  <FormHelperText>
                    masukkan kabupaten dimana tempat wisata berada
                  </FormHelperText>
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel htmlFor="Kecamatan">Kecamatan</FormLabel>
                  <Input
                    placeholder="Kecamatan"
                    variant={"filled"}
                    type={"text"}
                    value={kecamatan}
                    onChange={(e) => setkecamatan(e.target.value)}
                  />
                  <FormHelperText>
                    Masukkan nama kecamatan tempat wisata berada
                  </FormHelperText>
                </FormControl>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <FormLabel mt={5}>Lokasi Wisata</FormLabel>
        <Map
          provider={maptilerProvider}
          height={300}
          width={765}
          dprs={[1, 2]}
          defaultCenter={[1.1603381323455186, 97.52212877347822]}
          center={[latitude, longitude]}
          defaultZoom={12}
          onClick={(e) => {
            setlatitude(e.latLng[0]);
            setlongitude(e.latLng[1]);
          }}
        >
          <Marker color="red" width={40} />
          <ZoomControl />
        </Map>
        <Box>
          <FormLabel mt={5}>Gambar</FormLabel>
          <Uploadfile file={(images) => setimages(images)} />
        </Box>
        <Button
          colorScheme={"blue"}
          marginTop={"6"}
          width={"full"}
          alignSelf={"center"}
          onClick={handleUpload}
        >
          {button}
        </Button>
      </Box>
    </Center>
  );
}
