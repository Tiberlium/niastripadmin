import React, { useState, useEffect } from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Stack,
  Textarea,
  useToast,
  Checkbox,
  CheckboxGroup,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import ImageUploading from "react-images-uploading";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { FiUpload, FiChevronRight } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";
import { useParams, Link } from "react-router-dom";
import { db, storages } from "../../Firebase";

export default function Managestaycation() {
  const [images, setimages] = useState([]);
  const [nama, setnama] = useState("");
  const [kabupaten, setkabupaten] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [tarif, settarif] = useState(0);
  const [fasilitas, setfasilitas] = useState(["Bed", "Fan"]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [url, seturl] = useState([]);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const { id } = useParams();

  const onChange = (imageList) => {
    setimages(imageList);
  };

  const Get = () => {
    if (id) {
      const docRef = db.collection("Staycation").doc(id).get();
      docRef.then((doc) => {
        setdeskripsi(doc.data().Deskripsi);
        setnama(doc.data().Nama);
        setkabupaten(doc.data().Kabupaten);
        settarif(doc.data().Harga);
        setfasilitas(doc.data().Fasilitas);
        seturl(doc.data().Galery);
        setlatitude(doc.data().Latitude);
        setlongitude(doc.data().Longitude);
      });
    } else {
      setnama("");
      setkabupaten("");
      settarif(0);
      setdeskripsi("");
      setimages([]);
    }
  };

  const handleUpload = () => {
    setloading(true);
    if (!id) {
      const uploadTask = images.map((doc) => {
        const docRef = storages.ref(`Hotel/${doc.file.name}`);
        return docRef
          .put(doc.file, { contentType: "image/jpeg" })
          .then(() => docRef.getDownloadURL());
      });

      Promise.all(uploadTask)
        .then((filedownloadurl) => {
          db.collection("Staycation").add({
            Nama: nama,
            Deskripsi: deskripsi,
            Kabupaten: kabupaten,
            Harga: tarif,
            Latitude: latitude,
            Kategori: "Penginapan",
            Longitude: longitude,
            Fasilitas: fasilitas,
            Galery: filedownloadurl,
            Gambar: filedownloadurl[0],
            Rating: 0,
          });
        })
        .then(() => {
          setimages([]);
          setnama("");
          setdeskripsi("");
          settarif(0);
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
        .catch((e) => {
          console.error(e);
        });
    } else {
      if (images.length !== 0) {
        const deleteTask = url.map((doc) => {
          storages.refFromURL(doc).delete();
        });

        const uploadTask = images.map((doc) => {
          const docRef = storages.ref(`Hotel/${doc.file.name}`);
          return docRef
            .put(doc.file, { contentType: "image/jpeg" })
            .then(() => docRef.getDownloadURL());
        });

        Promise.all(deleteTask)
          .then(() => {
            Promise.all(uploadTask).then((filedownloadurl) => {
              db.collection("Staycation")
                .doc(id)
                .update({
                  Deskripsi: deskripsi,
                  Kabupaten: kabupaten,
                  Harga: tarif,
                  Latitude: latitude,
                  Kategori: "Penginapan",
                  Longitude: longitude,
                  Fasilitas: fasilitas,
                  Galery: filedownloadurl,
                  Gambar: filedownloadurl[0],
                })
                .then(() => {
                  setimages([]);
                  setnama("");
                  setdeskripsi("");
                  settarif(0);
                  setkabupaten("");
                  setlatitude(0);
                  setlongitude(0);
                  setloading(false);
                  toast({
                    title: "Data diperbarui",
                    description: "Data telah berhasil di perbarui",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            });
          })
          .catch((e) => console.error(e));
      } else {
        db.collection("Staycation")
          .doc(id)
          .update({
            Deskripsi: deskripsi,
            Kabupaten: kabupaten,
            Harga: tarif,
            Latitude: latitude,
            Kategori: "Penginapan",
            Longitude: longitude,
            Fasilitas: fasilitas,
          })
          .then(() => {
            setimages([]);
            setnama("");
            setdeskripsi("");
            settarif(0);
            setkabupaten("");
            setlatitude(0);
            setlongitude(0);
            setloading(false);
            toast({
              title: "Data diperbarui",
              description: "Data telah berhasil di perbarui",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          });
      }
    }
  };

  useEffect(() => {
    Get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box width={"3xl"} mr="32">
        <Breadcrumb
          spacing="8px"
          separator={<FiChevronRight color="gray.500" />}
          mb={5}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Main">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Main/Manage">
              Kelola
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Main/Staycation">
              Tempat penginapan
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to="#">
              Form Penginapan
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>
          <Text fontSize={"4xl"}>Form Penginapan</Text>
          <Box>
            <FormControl required width={"3xl"} mt={10}>
              <FormLabel htmlFor="Nama wisata" mt={5}>
                Nama Penginapan
              </FormLabel>
              <Input
                placeholder="Nama Wisata"
                variant={"filled"}
                type={"text"}
                defaultValue={nama || ""}
                onChange={(e) => setnama(e.target.value)}
              />
              <FormHelperText>masukkan nama Penginapan</FormHelperText>

              <FormLabel htmlFor="Deskripsi" mt={5}>
                Deskripsi
              </FormLabel>
              <Textarea
                placeholder="masukkan deskripsi"
                variant={"filled"}
                defaultValue={deskripsi || ""}
                onChange={(e) => setdeskripsi(e.target.value)}
              />
              <FormHelperText>
                masukkan deskripsi tentang penginapan
              </FormHelperText>
              <FormLabel htmlFor="Kabupaten" mt={5}>
                Kabupaten
              </FormLabel>
              <Input
                placeholder="Kabupaten"
                variant={"filled"}
                type={"text"}
                defaultValue={kabupaten || ""}
                onChange={(e) => setkabupaten(e.target.value)}
              />
              <FormHelperText>
                masukkan kabupaten dimana tempat penginapan berada
              </FormHelperText>
              <FormLabel htmlFor="Tarif" mt={5}>
                Tarif per Malam
              </FormLabel>
              <Input
                placeholder="ex Rp.123456789"
                variant={"filled"}
                type="number"
                value={tarif || 0}
                onChange={(e) => settarif(e.target.value)}
              />
              <FormHelperText>
                Masukkan Tarif permalam untuk penggunaan penginapan
              </FormHelperText>

              <CheckboxGroup
                colorScheme="green"
                defaultValue={fasilitas}
                onChange={(res) => setfasilitas(res)}
              >
                <FormLabel htmlFor="Fasilitas" mt={5}>
                  Fasilitas
                </FormLabel>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="Bed">Bed</Checkbox>
                  <Checkbox value="Ac">Ac</Checkbox>
                  <Checkbox value="Fan">Fan</Checkbox>
                  <Checkbox value="Breakfast">Breakfast</Checkbox>
                  <Checkbox value="Television">Television</Checkbox>
                  <Checkbox value="Wifi">Wifi</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Box>
        </Box>
        <FormLabel mt={5}>Lokasi Penginapan</FormLabel>
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
        <Text fontSize="sm" textColor={"GrayText"}>
          Atur Marker dimana letak penginapan berada
        </Text>
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
          isLoading={loading}
          onClick={handleUpload}
        >
          {id ? "Update" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
}
