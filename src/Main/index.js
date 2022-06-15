import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Component/Navigation";
import {
  Managewisata,
  Wisata,
  Manageevent,
  Managemakanan,
  Managestaycation,
  Staycation,
  Makanan,
  Event,
  User,
  Userdetail,
  Dashboard,
  Manage,
  Transaction,
  Report,
  Managerestoran,
  Restoran,
  Transactiondetail,
} from "../Pages";

import { Flex, Box, Center } from "@chakra-ui/react";

function Main() {
  return (
    <Flex>
      <Navigation />
      <Center w="100%">
        <Box ml={"20"} display="flex" mt="20">
          <Routes>
            <Route path="/Main" element={<Dashboard />} />
            <Route path="/Main/Wisata" element={<Wisata />} />
            <Route
              path="/Main/Tambahkandatawisata"
              element={<Managewisata />}
            />
            <Route
              path="/Main/Tambahkandatamakanan"
              element={<Managemakanan />}
            />
            <Route path="/Main/Tambahkandataevent" element={<Manageevent />} />
            <Route
              path="/Main/Tambahkandatarestoran"
              element={<Managerestoran />}
            />
            <Route path="/Main/Editwisata/:id" element={<Managewisata />} />
            <Route path="/Main/Editrestoran/:id" element={<Managerestoran />} />
            <Route path="/Main/Restoran" element={<Restoran />} />
            <Route path="/Main/User" element={<User />} />
            <Route path="/Main/Transaction" element={<Transaction />} />
            <Route
              path="/Main/Transactiondetail/:id"
              element={<Transactiondetail />}
            />
            <Route path="/Main/Manage" element={<Manage />} />
            <Route path="/Main/Report" element={<Report />} />
            <Route path="/Main/Event" element={<Event />} />
            <Route path="/Main/Makanan" element={<Makanan />} />
            <Route path="/Main/Staycation" element={<Staycation />} />
            <Route path="/Main/Editevent/:id" element={<Manageevent />} />
            <Route path="/Main/Editmakanan/:id" element={<Managemakanan />} />
            <Route
              path="/Main/Editstaycation/:id"
              element={<Managestaycation />}
            />
            <Route
              path="/Main/Tambahkandatastaycation"
              element={<Managestaycation />}
            />
            <Route path="/Main/Userdetail/:id" element={<Userdetail />} />
          </Routes>
        </Box>
      </Center>
    </Flex>
  );
}

export default Main;
