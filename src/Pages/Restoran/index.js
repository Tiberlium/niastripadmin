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

export default function Restoran() {
  const [nama, setnama] = useState(second);
  return (
    <Center>
      <Box width={"3xl"}>
        <Box>
          <Text fontSize={"4xl"}>Restoran Form</Text>
          <Wrap>
            <WrapItem>
              <Box>
                <FormControl required width={"3xl"} mt={10} isInvalid={isError}>
                  <FormLabel htmlFor="Nama wisata">Nama Restoran</FormLabel>
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
                  <FormLabel htmlFor="Deskripsi">Kontak</FormLabel>
                  <Textarea
                    placeholder="masukkan Kontak"
                    variant={"filled"}
                    defaultValue={deskripsi || ""}
                    onChange={(e) => setdeskripsi(e.target.value)}
                  />
                  <FormHelperText>masukkan deskripsi restoran</FormHelperText>
                </FormControl>
                <FormControl required mt={5}>
                  <FormLabel htmlFor="Kabupaten">Lokasi</FormLabel>
                  <Input
                    placeholder="Lokasi"
                    variant={"filled"}
                    type={"text"}
                    defaultValue={kabupaten || ""}
                    onChange={(e) => setkabupaten(e.target.value)}
                  />
                  <FormHelperText>
                    masukkan nama jalan dimana restoran berada
                  </FormHelperText>
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel htmlFor="Kecamatan">Jam operasional</FormLabel>
                  <Input
                    placeholder="Jam operasional"
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
