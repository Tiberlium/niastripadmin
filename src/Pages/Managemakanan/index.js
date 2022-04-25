import React, { useEffect, useState } from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Textarea,
  Center,
  useToast,
  Button,
} from "@chakra-ui/react";

import ImageUploading from "react-images-uploading";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { FiUpload } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";
import { useParams } from "react-router-dom";
import { db, storages } from "../../Firebase";

export default function Managemakanan() {
  const [images, setimages] = useState([]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [url, seturl] = useState([]);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const { id } = useParams();

  const get = () => {
    if (id) {
      const docRef = db.collection("Makanan").doc(id).get();
      setnama(docRef.data().Nama);
      setdeskripsi(docRef.data().Deskripsi);
      seturl(docRef.data().Galery);
    } else {
      setnama("");
      setdeskripsi("");
    }
  };

  const handleUpload = () => {
    if (!id) {
      const uploadTask = images.map((doc) => {
        const docRef = storages.ref(`Makanan/${doc.file.name}`);
        return docRef.put(doc.file.name).then(() => docRef.getDownloadURL());
      });

      Promise.all(uploadTask)
        .then((filedownloadurl) => {
          db.collection("Makanan")
            .add({
              Nama: nama,
              Deskripsi: deskripsi,
              Galery: filedownloadurl,
              Gambar: filedownloadurl[0],
              lat: latitude,
              long: longitude,
              Kategori: "Makanan",
            })
            .then(() => {
              setimages([]);
              setnama("");
              setkecamatan("");
              setdeskripsi("");
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
        .catch((e) => console.error(e));
    } else {
      if (images !== 0) {
        const deleteTask = url.map((doc) => {
          storages.refFromURL(doc).delete();
        });

        const uploadTask = images.map((doc) => {
          const docRef = storages.ref(`Makanan/${doc.file.name}`);
          return docRef.put(doc.file.name).then(() => docRef.getDownloadURL());
        });

        Promise.all(deleteTask)
          .then(() => {
            Promise.all(uploadTask).then((filedownloadurl) => {
              db.collection("Makanan")
                .doc(id)
                .update({
                  Nama: nama,
                  Deskripsi: deskripsi,
                  Galery: filedownloadurl,
                  Gambar: filedownloadurl[0],
                  lat: latitude,
                  long: longitude,
                  Kategori: "Makanan",
                })
                .then(() => {
                  toast({
                    title: "Data di perbarui",
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
        db.collection("Makanan")
          .doc(id)
          .update({
            Nama: nama,
            Deskripsi: deskripsi,
            lat: latitude,
            long: longitude,
            Kategori: "Makanan",
          })
          .then(() => {
            toast({
              title: "Data di perbarui",
              description: "Data telah berhasil di perbarui",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
  };

  useEffect(() => {
    get();
  }, []);

  const onChange = (imageList) => {
    setimages(imageList);
  };

  return (
    <Center>
      <Box width={"3xl"}>
        <Box>
          <Text fontSize={"4xl"}>Makanan Form</Text>
          <Box>
            <FormControl required width={"3xl"} mt={10}>
              <FormLabel htmlFor="Nama makanan" mt={5}>
                Nama Makanan
              </FormLabel>
              <Input
                placeholder="Nama Wisata"
                variant={"filled"}
                type={"text"}
                // defaultValue={nama || ""}
                // onChange={(e) => setnama(e.target.value)}
              />
              <FormHelperText>masukkan nama makanan</FormHelperText>

              <FormLabel htmlFor="Deskripsi" mt={5}>
                Deskripsi
              </FormLabel>
              <Textarea
                placeholder="masukkan deskripsi"
                variant={"filled"}
                // defaultValue={deskripsi || ""}
                // onChange={(e) => setdeskripsi(e.target.value)}
              />
              <FormHelperText>
                masukkan deskripsi tentang makanan
              </FormHelperText>
            </FormControl>
          </Box>
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
        <Text fontSize="sm" textColor={"GrayText"}>
          Atur Marker dimana lokasi makanan berada
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
        >
          {id ? "Update" : "Submit"}
        </Button>
      </Box>
    </Center>
  );
}
