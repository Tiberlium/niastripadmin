import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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

import { Box, Center, Flex } from "@chakra-ui/react";

function Main() {
  return (
    <BrowserRouter>
      <Flex>
        <Navigation />
        <Center w="100%">
          <Box ml={"20"} display="flex" mt="20">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Main" element={<Dashboard />} />
              <Route path="/Wisata" element={<Wisata />} />
              <Route path="/Tambahkandatawisata" element={<Managewisata />} />
              <Route path="/Tambahkandatamakanan" element={<Managemakanan />} />
              <Route path="/Tambahkandataevent" element={<Manageevent />} />
              <Route
                path="/Tambahkandatarestoran"
                element={<Managerestoran />}
              />
              <Route path="/Editwisata/:id" element={<Managewisata />} />
              <Route path="/Editrestoran/:id" element={<Managerestoran />} />
              <Route path="/Restoran" element={<Restoran />} />
              <Route path="/User" element={<User />} />
              <Route path="/Transaction" element={<Transaction />} />
              <Route
                path="/Transactiondetail/:id"
                element={<Transactiondetail />}
              />
              <Route path="/Manage" element={<Manage />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Event" element={<Event />} />
              <Route path="/Makanan" element={<Makanan />} />
              <Route path="/Staycation" element={<Staycation />} />
              <Route path="/Editevent/:id" element={<Manageevent />} />
              <Route path="/Editmakanan/:id" element={<Managemakanan />} />
              <Route
                path="/Editstaycation/:id"
                element={<Managestaycation />}
              />
              <Route
                path="/Tambahkandatastaycation"
                element={<Managestaycation />}
              />
              <Route path="/Userdetail/:id" element={<Userdetail />} />
            </Routes>
          </Box>
        </Center>
      </Flex>
    </BrowserRouter>
  );
}

export default Main;
