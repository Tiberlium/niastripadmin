import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";

export default function Managerestoran() {
  const [nama, setnama] = useState("");
  const [kontak, setkontak] = useState(0);
  const [alamat, setalamat] = useState("");
  const [operasional, setoperasional] = useState("");
  const [images, setimages] = useState([]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);

  const { id } = useParams();

  const onChange = (imageList) => setimages(imageList);

  return (
    <Center>
      <Box width={"3xl"}>
        <Box>
          <Text fontSize={"4xl"}>Restoran Form</Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required width={"3xl"} mt={10} isInvalid={isError}>
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
