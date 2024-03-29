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
  Collapse,
  useDisclosure,
  Checkbox,
  Stack,
  CheckboxGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import ImageUploading from "react-images-uploading";
import { FiUpload, FiChevronRight } from "react-icons/fi";
import Imagescard from "../../Component/Imagescard";
import { useParams, Link } from "react-router-dom";
import { db, storages } from "../../Firebase";

export default function Managemakanan() {
  const [images, setimages] = useState([]);
  const [nama, setnama] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [url, seturl] = useState([]);
  const [loading, setloading] = useState(false);
  const [rm, setrm] = useState([]);
  const toast = useToast();
  const { id } = useParams();
  const { isOpen, onToggle } = useDisclosure();
  const [available, setavailable] = useState([]);

  const get = async () => {
    if (id) {
      const docRef = await db.collection("Makanan").doc(id).get();
      setnama(docRef.data().Nama);
      setdeskripsi(docRef.data().Deskripsi);
      seturl(docRef.data().Galery);
      setavailable(docRef.data().Tersedia);
    } else {
      setnama("");
      setdeskripsi("");
      seturl([]);
    }
  };

  const getRM = async () => {
    let x = [];
    const docRef = await db.collection("Rm").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setrm(x);
  };

  const handleUpload = () => {
    if (!id) {
      const uploadTask = images.map((doc) => {
        const docRef = storages.ref(`Makanan/${doc.file.name}`);
        return docRef
          .put(doc.file, { contentType: "image/jpeg" })
          .then(() => docRef.getDownloadURL());
      });

      Promise.all(uploadTask)
        .then((filedownloadurl) => {
          db.collection("Makanan")
            .add({
              Nama: nama,
              Deskripsi: deskripsi,
              Galery: filedownloadurl,
              Gambar: filedownloadurl[0],
              Tersedia: available,
              Kategori: "Makanan",
              Rating:0,
            })
            .then(() => {
              setimages([]);
              setnama("");
              setavailable([]);
              setdeskripsi("");
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
      if (images.length !== 0) {
        const deleteTask = url.map((doc) => {
          storages.refFromURL(doc).delete();
        });

        const uploadTask = images.map((doc) => {
          const docRef = storages.ref(`Makanan/${doc.file.name}`);
          return docRef
            .put(doc.file, { contentType: "image/jpeg" })
            .then(() => docRef.getDownloadURL());
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
                  Tersedia: available,
                  Kategori: "Makanan",
                })
                .then(() => {
                  setimages([]);
                  setnama("");
                  setavailable([]);
                  setdeskripsi("");
                  setloading(false);
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
            Kategori: "Makanan",
            Tersedia: available,
          })
          .then(() => {
            setimages([]);
            setnama("");
            setavailable([]);
            setdeskripsi("");
            setloading(false);
            toast({
              title: "Data di perbarui",
              description: "Data telah berhasil di perbarui",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          })
          .catch((e) => {
            setimages([]);
            setnama("");
            setavailable([]);
            setdeskripsi("");
            setloading(false);
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

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRM();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (imageList) => {
    setimages(imageList);
  };

  return (
    <Box width={"3xl"} mr="36">
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
          <BreadcrumbLink as={Link} to="/Main/Makanan">
            Makanan Tradisional
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Form makanan
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Text fontSize={"4xl"}>Form Makanan Tradisional</Text>
        <Box>
          <FormControl required width={"3xl"} mt={10}>
            <FormLabel htmlFor="Nama makanan" mt={5}>
              Nama Makanan
            </FormLabel>
            <Input
              placeholder="Nama Wisata"
              variant={"filled"}
              type={"text"}
              defaultValue={nama || ""}
              onChange={(e) => setnama(e.target.value)}
            />
            <FormHelperText>masukkan nama makanan</FormHelperText>

            <FormLabel htmlFor="Deskripsi" mt={5}>
              Deskripsi
            </FormLabel>
            <Textarea
              placeholder="masukkan deskripsi"
              variant={"filled"}
              defaultValue={deskripsi || ""}
              onChange={(e) => setdeskripsi(e.target.value)}
            />
            <FormHelperText>masukkan deskripsi tentang makanan</FormHelperText>
            <FormLabel htmlFor="Available" mt={5}>
              Tersedia di Tempat Makan
            </FormLabel>
            <Button
              onClick={onToggle}
              width="full"
              fontWeight="normal"
              color="blackAlpha.700"
            >
              Pilih tempat makan dimana tersedia makanan ini
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <FormLabel mb={5}>Daftar Tempat Makan</FormLabel>
                <CheckboxGroup
                  colorScheme="green"
                  onChange={(res) => {
                    setavailable(res);
                  }}
                  value={available}
                >
                  <Stack spacing={[1, 5]} direction={["column"]}>
                    {rm.map((doc) => (
                      <Box key={doc["id"]}>
                        <Checkbox value={doc["data"]["Nama"]}>
                          {doc["data"]["Nama"]}
                        </Checkbox>
                      </Box>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </Box>
            </Collapse>
            <FormHelperText>
              Pilih tempat dimana makanan tersebut tersedia
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
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
