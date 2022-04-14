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

export default function Managemakanan() {
  const [images, setimages] = useState([]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const { id } = useParams();

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
          <ImageUploading multiple value={images}>
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
        >
          {id ? "Update" : "Submit"}
        </Button>
      </Box>
    </Center>
  );
}
