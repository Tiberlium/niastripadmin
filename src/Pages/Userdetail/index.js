import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import Detailuser from "../../Component/Detailuser";

export default function Userdetail() {
  const [data, setdata] = useState({});
  const { id } = useParams();

  const get = async () => {
    const docRef = await db.collection("Users").doc(id).get();
    setdata(docRef.data());
  };

  useEffect(() => {
    get();
  }, []);


  console.log(data.reservation);

  return (
    <Box>
      <Detailuser
        nama={data.name}
        alamat={data.address}
        phone={data.phoneNumber}
        nation={data.nation}
        gender={data.gender}
        email={data.email}
        gambar={data.gambar}
      />
    </Box>
  );
}
