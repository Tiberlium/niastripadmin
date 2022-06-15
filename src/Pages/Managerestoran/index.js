import React, { useState, useEffect } from "react";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { storages, db } from "../../Firebase";
import ImageUploading from "react-images-uploading";
import { FiUpload, FiChevronRight } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";

export default function Managerestoran() {
  const [nama, setnama] = useState("");
  const [kontak, setkontak] = useState("");
  const [alamat, setalamat] = useState("");
  const [operasional, setoperasional] = useState("");
  const [images, setimages] = useState([]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState("");
  const toast = useToast();

  const { id } = useParams();

  const handleUpload = () => {
    if (!id) {
      setloading(true);
      const taskUpload = images.map((doc) => {
        const dataRef = storages.ref(`Rm/${doc.file.name}`);
        return dataRef
          .put(doc.file, { contentType: "image/jpeg" })
          .then(() => dataRef.getDownloadURL());
      });

      Promise.all(taskUpload)
        .then((filedownloadurl) => {
          db.collection("Rm")
            .add({
              Nama: nama,
              Kontak: kontak,
              Kategori: "Tempat Makan",
              Lokasi: alamat,
              Kontak: kontak,
              Operasional: operasional,
              Latitude: latitude,
              Longitude: longitude,
              Gambar: filedownloadurl[0],
              Rating: 0,
            })
            .then(() => {
              setimages([]);
              setnama("");
              setkontak(0);
              setoperasional("");
              setalamat("");
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
            });
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      if (!images) {
        setloading(true);
        const deleteimages = storages.refFromURL(url).delete();
        const uploadTask = images.map((doc) => {
          const docRef = storages.ref(`Rm/${doc.file.name}`);
          return docRef
            .put(doc.file, { contentType: "image/jpeg" })
            .then(() => docRef.getDownloadURL());
        });

        Promise.all(deleteimages).then(() =>
          Promise.all(uploadTask).then((filedownloadurl) => {
            db.collection("Event")
              .doc(id)
              .update({
                Nama: nama,
                Kontak: kontak,
                Kategori: "Tempat Makan",
                Lokasi: alamat,
                Kontak: kontak,
                Operasional: operasional,
                Latitude: latitude,
                Longitude: longitude,
                Gambar: filedownloadurl[0],
              })
              .then(() => {
                setloading(false);
                toast({
                  title: "Data di perbarui",
                  description: "Data telah berhasil di perbarui",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              });
          })
        );
      } else {
        db.collection("Event")
          .doc(id)
          .update({
            Nama: nama,
            Kontak: kontak,
            Kategori: "Tempat Makan",
            Lokasi: alamat,
            Kontak: kontak,
            Operasional: operasional,
            Latitude: latitude,
            Longitude: longitude,
          })
          .then(() => {
            setloading(true);
            toast({
              title: "Data di perbarui",
              description: "Data telah berhasil di perbarui",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          })
          .catch(() => {
            toast({
              title: "Terjadi kesalahan",
              description: "Terjadi sebuah kesalahan",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
      }
    }
  };

  const get = async () => {
    if (id) {
      const docRef = await db.collection("Rm").doc(id).get();
      setalamat(docRef.data().Lokasi);
      setnama(docRef.data().Nama);
      setkontak(docRef.data().Kontak);
      setoperasional(docRef.data().Operasional);
      setlatitude(docRef.data().Latitude);
      setlongitude(docRef.data().Longitude);
      seturl(docRef.data().Gambar);
    } else {
      setalamat("");
      setnama("");
      setkontak("");
      setoperasional("");
      setimages([]);
    }
  };

  useEffect(() => {
    get();
  }, []);

  const onChange = (imageList) => setimages(imageList);

  return (
    <Center>
      <Box width={"3xl"}>
        <Breadcrumb
          spacing="8px"
          separator={<FiChevronRight color="gray.500" />}
          mb={5}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Dashboard">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Manage">
              Manage
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/Restoran">
              Tempat makan
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to="#">
              Form Tempat makan
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>
          <Text fontSize={"4xl"}>Form Tempat Makan</Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required width={"3xl"} mt={10}>
                  <FormLabel htmlFor="Nama restoran">Nama Restoran</FormLabel>
                  <Input
                    placeholder="Nama Restoran"
                    variant={"filled"}
                    type={"text"}
                    defaultValue={nama || ""}
                    onChange={(e) => setnama(e.target.value)}
                  />
                  <FormHelperText>masukkan nama tempat restoran</FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Kontak">Kontak</FormLabel>
                  <Textarea
                    placeholder="masukkan Kontak"
                    variant={"filled"}
                    defaultValue={kontak || ""}
                    onChange={(e) => setkontak(e.target.value)}
                  />
                  <FormHelperText>masukkan kontak restoran</FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Lokasi">Lokasi</FormLabel>
                  <Input
                    placeholder="Lokasi"
                    variant={"filled"}
                    type={"text"}
                    defaultValue={alamat || ""}
                    onChange={(e) => setalamat(e.target.value)}
                  />
                  <FormHelperText>
                    masukkan nama jalan dimana restoran berada
                  </FormHelperText>
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel htmlFor="Jam Operasional">
                    Jam operasional
                  </FormLabel>
                  <Input
                    placeholder="Jam operasional"
                    variant={"filled"}
                    type={"text"}
                    defaultValue={operasional || ""}
                    onChange={(e) => setoperasional(e.target.value)}
                  />
                  <FormHelperText>
                    Masukkan jam operasional restoran
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
