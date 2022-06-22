import React, { useState, useEffect } from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Textarea,
  useToast,
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

export default function Manageevent() {
  const [images, setimages] = useState([]);
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [kabupaten, setkabupaten] = useState("");
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [tarif, settarif] = useState(0);
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState("");
  const toast = useToast();
  const { id } = useParams();

  const handleUpload = () => {
    if (!id) {
      setloading(true);
      const taskUpload = images.map((doc) => {
        const dataRef = storages.ref(`Event/${doc.file.name}`);
        return dataRef
          .put(doc.file, { contentType: "image/jpeg" })
          .then(() => dataRef.getDownloadURL());
      });

      Promise.all(taskUpload)
        .then((filedownloadurl) => {
          db.collection("Event")
            .add({
              Nama: nama,
              Kabupaten: kabupaten,
              Kategori: "Event",
              Deskripsi: deskripsi,
              Latitude: latitude,
              Longitude: longitude,
              Gambar: filedownloadurl[0],
              Tarif: tarif,
            })
            .then(() => {
              setimages([]);
              setnama("");
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
          const docRef = storages.ref(`Event/${doc.file.name}`);
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
                Kabupaten: kabupaten,
                Kategori: "Event",
                Deskripsi: deskripsi,
                Latitude: latitude,
                Longitude: longitude,
                Gambar: filedownloadurl[0],
                Tarif: tarif,
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
            Kabupaten: kabupaten,
            Kategori: "Event",
            Deskripsi: deskripsi,
            Latitude: latitude,
            Longitude: longitude,
            Tarif: tarif,
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
      const docRef = await db.collection("Event").doc(id).get();
      setnama(docRef.data().Nama);
      setkabupaten(docRef.data().Kabupaten);
      setdeskripsi(docRef.data().Deskripsi);
      setlatitude(docRef.data().Latitude);
      setlongitude(docRef.data().Longitude);
      seturl(docRef.data().Gambar);
      settarif(docRef.data().Tarif);
    } else {
      setnama("");
      setkabupaten("");
      setdeskripsi("");
      setimages([]);
      settarif(0);
    }
  };

  useState(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (imagelist) => {
    setimages(imagelist);
  };
  return (
    <Box width={"3xl"} mr="32">
      <Breadcrumb
        spacing="8px"
        separator={<FiChevronRight color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Manage">
            Kelola
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Event">
            Event
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Form event
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Text fontSize={"4xl"}>Form event</Text>
        <Box>
          <FormControl required width={"3xl"} mt={10}>
            <FormLabel htmlFor="Nama makanan" mt={5}>
              Nama Event
            </FormLabel>
            <Input
              placeholder="Nama Event"
              variant={"filled"}
              type={"text"}
              defaultValue={nama || ""}
              onChange={(e) => setnama(e.target.value)}
            />
            <FormHelperText>masukkan nama Event</FormHelperText>

            <FormLabel htmlFor="Deskripsi" mt={5}>
              Deskripsi
            </FormLabel>
            <Textarea
              placeholder="masukkan deskripsi"
              variant={"filled"}
              defaultValue={deskripsi || ""}
              onChange={(e) => setdeskripsi(e.target.value)}
            />
            <FormHelperText>masukkan deskripsi tentang Event</FormHelperText>
            <FormLabel htmlFor="Kabupaten" mt={5}>
              Kabupaten
            </FormLabel>
            <Input
              type={"text"}
              placeholder="masukkan kabupaten"
              variant={"filled"}
              defaultValue={kabupaten || ""}
              onChange={(e) => setkabupaten(e.target.value)}
            />
            <FormHelperText>
              masukkan kabupaten diamana event akan di adakan
            </FormHelperText>
            <FormLabel htmlFor="Kabupaten" mt={5}>
              Tarif tiket
            </FormLabel>
            <Input
              type={"number"}
              placeholder="masukkan tarif"
              variant={"filled"}
              defaultValue={tarif || ""}
              onChange={(e) => settarif(e.target.value)}
            />
            <FormHelperText>masukkan tarif tiket event</FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <FormLabel mt={5}>Lokasi Event</FormLabel>
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
        Atur Marker dimana lokasi event akan diadakan
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
  );
}
