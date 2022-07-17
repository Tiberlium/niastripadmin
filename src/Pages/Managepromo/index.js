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

import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";

export default function Managepromo() {
  const [data, setdata] = useState([]);
  const [nama, setnama] = useState("");
  const [potongan, setpotongan] = useState(0);
  const [kode, setkode] = useState("");
  const [date, setdate] = useState(new Date());
  const [tempat, settempat] = useState("");
  const [couponid, setcouponid] = useState("");

  const { id } = useParams();

  console.log(tempat, couponid);

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Staycation").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setdata(x);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
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
          <BreadcrumbLink as={Link} to="/Main/Promo">
            Promo
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Form promo
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Text fontSize={"4xl"}>Form promo</Text>
        <Box>
          <FormControl required width={"3xl"} mt={10}>
            <FormLabel htmlFor="Nama promo" mt={5}>
              Nama Promo
            </FormLabel>
            <Input
              placeholder="Nama promo"
              variant={"filled"}
              type={"text"}
              defaultValue={nama || ""}
              onChange={(e) => setnama(e.target.value)}
            />
            <FormHelperText>masukkan nama promo</FormHelperText>
            <FormLabel htmlFor="Potongan" mt={5}>
              Potongan
            </FormLabel>
            <Input
              type={"number"}
              placeholder="masukkan potongan promo"
              variant={"filled"}
              defaultValue={potongan || ""}
              onChange={(e) => setpotongan(e.target.value)}
            />
            <FormHelperText>masukkan potongan promo anda</FormHelperText>
            <FormLabel htmlFor="Potongan" mt={5}>
              Kode unik
            </FormLabel>
            <Input
              type={"text"}
              placeholder="masukkan kode unik promo"
              variant={"filled"}
              defaultValue={kode || ""}
              onChange={(e) => setkode(e.target.value)}
            />
            <FormHelperText>masukkan kode unik promo anda</FormHelperText>
            <FormLabel htmlFor="Kabupaten" mt={5}>
              Tempat tujuan promo
            </FormLabel>
            <Select
              placeholder="Pilih tempat"
              onChange={(e) => settempat(e.target.value)}
            >
              {data.map((doc) => (
                <option value={doc["data"]["Nama"]}>
                  {doc["data"]["Nama"]}
                </option>
              ))}
            </Select>
            <FormHelperText>Tempat tersedianya promo</FormHelperText>
            <FormLabel htmlFor="Batas waktu promo" mt={5}>
              Batas waktu promo
            </FormLabel>
            <Input
              type={"date"}
              onChange={(e) => setdate(e.target.value)}
              value={date}
            />
            <Button
              colorScheme={"blue"}
              marginTop={"6"}
              width={"full"}
              alignSelf={"center"}
            >
              {id ? "Update" : "Submit"}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
