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
  Switch,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { storages, db } from "../../Firebase";
import { useParams,Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { FiUpload,FiChevronRight } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";

export default function Managewisata() {
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [kabupaten, setkabupaten] = useState("");
  const [kecamatan, setkecamatan] = useState("");
  const [rekomendasi, setrekomendasi] = useState("");
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState();
  const toast = useToast();

  const [disable, setdisable] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    Get();
  }, []);

  async function handleUpload() {
    if (!id) {
      setloading(true);
      const promises = images.map((doc) => {
        const uploadTask = storages.ref(`Wisata/${doc.file.name}`);
        return uploadTask
          .put(doc.file, { contentType: "image/jpeg" })
          .then(() => uploadTask.getDownloadURL());
      });

      Promise.all(promises)
        .then((filedownloadurl) => {
          db.collection("Wisata").add({
            Nama: nama,
            Deskripsi: deskripsi,
            Kabupaten: kabupaten,
            Kecamatan: kecamatan,
            Kategori: "Tempat Wisata",
            Latitude: latitude,
            Rekomendasi: disable,
            Alasanrekomen: rekomendasi,
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
          setdisable(false);
          setrekomendasi("");
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
      setloading(true);
      if (!images) {
        const deleteImagesFrom_Url = url.map((x) => {
          const imagesRef = storages.refFromURL(x);
          imagesRef.delete();
        });

        const uploadTask = images.map((doc) => {
          const uploadTask = storages.ref(`images/${doc.file.name}`);
          return uploadTask
            .put(doc.file, { contentType: "image/jpeg" })
            .then(() => uploadTask.getDownloadURL());
        });

        Promise.all(deleteImagesFrom_Url).then(() =>
          Promise.all(uploadTask)
            .then((filedownloadurl) => {
              db.collection("Wisata")
                .doc(id)
                .update({
                  Nama: nama,
                  Deskripsi: deskripsi,
                  Kabupaten: kabupaten,
                  Kecamatan: kecamatan,
                  Kategori: "Tempat Wisata",
                  Latitude: latitude,
                  Rekomendasi: disable,
                  Alasanrekomen: rekomendasi,
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
            })
            .catch((err) => console.error(err))
        );
      }

      await db
        .collection("Wisata")
        .doc(id)
        .update({
          Nama: nama,
          Deskripsi: deskripsi,
          Kabupaten: kabupaten,
          Kecamatan: kecamatan,
          Kategori: "Tempat Wisata",
          Rekomendasi: disable,
          Alasanrekomen: rekomendasi,
          Latitude: latitude,
          Longitude: longitude,
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
        })
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
      setdisable(docRef.data().Rekomendasi);
      setrekomendasi(docRef.data().Alasanrekomen);
      seturl(docRef.data().Galery);
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

  const isError = Input === "" && images === [];

  return (
    <Center>
      <Box width={"3xl"}>
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
            <BreadcrumbLink as={Link} to="/Main/Wisata">
              Tempat wisata
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to="#">
              Form Tempat wisata
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>
          <Text fontSize={"4xl"}>Form Wisata</Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required width={"3xl"} mt={10} isInvalid={isError}>
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
                <FormControl display="flex" alignItems="center" mt={5}>
                  <FormLabel htmlFor="editor" mb="0">
                    Jadikan sebagai rekomendasi editor?
                  </FormLabel>
                  <Switch
                    id="editor"
                    isChecked={disable}
                    onChange={() =>
                      disable === false ? setdisable(true) : setdisable(false)
                    }
                  />
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel htmlFor="Kecamatan">Alasan Editor</FormLabel>
                  <Textarea
                    isDisabled={!disable}
                    placeholder="Masukkan alasan anda memilih tempat ini sebagai rekomendasi"
                    variant={"filled"}
                    type={"text"}
                    defaultValue={rekomendasi || ""}
                    onChange={(e) => setrekomendasi(e.target.value)}
                  />
                  <FormHelperText>
                    Masukkan alasan anda sebagai editor untuk rekomendasi tempat
                    ini
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
