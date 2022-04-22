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
  useToast,
  Button,
} from "@chakra-ui/react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { storages, db } from "../../Firebase";
import { useParams } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { FiUpload } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";

export default function Managewisata() {
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [kabupaten, setkabupaten] = useState("");
  const [kecamatan, setkecamatan] = useState("");
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const toast = useToast();

  const { id } = useParams();

  useEffect(() => {
    Get();
  }, []);

  async function handleUpload() {
    if (!id) {
      setloading(true);
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
          setimages([]);
          setnama("");
          setkecamatan("");
          setdeskripsi("");
          setkabupaten("");
          setlatitude(0);
          setlongitude(0);
          setloading(false);
          toast({
            title: "Data ditambahkan",
            description: "Data telah berhasil di tambahkan",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => console.log(err));
    } else {
      if (images.length !== 0) {
        const promises = images.map((doc) => {
          const uploadTask = storages.ref(`images/${doc.file.name}`);
          return uploadTask
            .put(doc.file)
            .then(() => uploadTask.getDownloadURL());
        });

        Promise.all(promises).then((filedownloadurl) => {
          db.collection("Wisata")
            .doc(id)
            .update({
              Nama: nama,
              Deskripsi: deskripsi,
              Kabupaten: kabupaten,
              Kecamatan: kecamatan,
              Kategori: "Tempat wisata",
              Latitude: latitude,
              Longitude: longitude,
              Galery: filedownloadurl,
              Gambar: filedownloadurl[0],
            })
            .then(() =>
              toast({
                title: "Data di perbarui",
                description: "Data telah berhasil di perbarui",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            )
            .catch((e) => console.log(e));
        });
      }

      await db
        .collection("Wisata")
        .doc(id)
        .update({
          Nama: nama,
          Deskripsi: deskripsi,
          Kabupaten: kabupaten,
          Kecamatan: kecamatan,
          Kategori: "Tempat wisata",
          Latitude: latitude,
          Longitude: longitude,
        })
        .then(() =>
          toast({
            title: "Data di perbarui",
            description: "Data telah berhasil di perbarui",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        )
        .catch((e) => console.log(e));
    }
  }

  async function Get() {
    if (id) {
      const docRef = await db.collection("Wisata").doc(id).get();
      setnama(docRef.data().Nama);
      setkabupaten(docRef.data().Kabupaten);
      setkecamatan(docRef.data().Kecamatan);
      setdeskripsi(docRef.data().Deskripsi);
      setlatitude(docRef.data().Latitude);
      setlongitude(docRef.data().Longitude);
    } else {
      setnama("");
      setkabupaten("");
      setkecamatan("");
      setdeskripsi("");
      setimages([]);
    }
  }

  function onChange(imageList) {
    setimages(imageList);
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
                    defaultValue={nama || ""}
                    onChange={(e) => setnama(e.target.value)}
                  />
                  <FormHelperText>masukkan nama tempat wisata</FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Deskripsi">Deskripsi</FormLabel>
                  <Textarea
                    placeholder="masukkan deskripsi"
                    variant={"filled"}
                    defaultValue={deskripsi || ""}
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
                    defaultValue={kabupaten || ""}
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
                    defaultValue={kecamatan || ""}
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
          provider={osm}
          height={400}
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
          <ImageUploading multiple value={images} onChange={onChange}>
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <Box>
                <Button
                  width={"full"}
                  leftIcon={<FiUpload />}
                  colorScheme={isDragging ? "red" : "teal"}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </Button>
                {imageList.map((image, index) => (
                  <Imagescard
                    key={index}
                    label={image.file.name}
                    onClick={() => onImageRemove(index)}
                  />
                ))}
              </Box>
            )}
          </ImageUploading>
        </Box>
        <Button
          colorScheme={"blue"}
          marginTop={"6"}
          width={"full"}
          alignSelf={"center"}
          onClick={handleUpload}
          isLoading={loading}
        >
          {id ? "Update" : "Submit"}
        </Button>
      </Box>
    </Center>
  );
}
