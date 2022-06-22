import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages";
import Navigation from "../src/Component/Navigation";
import Protectedroutes from "./Component/Protectedroutes";
import { Box, Text } from "@chakra-ui/react";

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
} from "../src/Pages";

const Emptypage = () => (
  <Box>
    <Text fontSize="4xl" textAlign="center">
      Halaman tidak ditemukan 404
    </Text>
  </Box>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Protectedroutes />}>
          <Route path="Main" element={<Navigation />}>
            <Route index element={<Dashboard />} />
            <Route path="Home" element={<Dashboard />} />
            <Route path="Wisata" element={<Wisata />} />
            <Route path="Tambahkandatawisata" element={<Managewisata />} />
            <Route path="Tambahkandatamakanan" element={<Managemakanan />} />
            <Route path="Tambahkandataevent" element={<Manageevent />} />
            <Route path="Tambahkandatarestoran" element={<Managerestoran />} />
            <Route path="Editwisata/:id" element={<Managewisata />} />
            <Route path="Editrestoran/:id" element={<Managerestoran />} />
            <Route path="Restoran" element={<Restoran />} />
            <Route path="User" element={<User />} />
            <Route path="Userdetail/:id" element={<Userdetail />} />
            <Route path="Transaction" element={<Transaction />} />
            <Route
              path="Transactiondetail/:id"
              element={<Transactiondetail />}
            />
            <Route path="Manage" element={<Manage />} />
            <Route path="Report" element={<Report />} />
            <Route path="Event" element={<Event />} />
            <Route path="Makanan" element={<Makanan />} />
            <Route path="Staycation" element={<Staycation />} />
            <Route path="Editevent/:id" element={<Manageevent />} />
            <Route path="Editmakanan/:id" element={<Managemakanan />} />
            <Route path="Editstaycation/:id" element={<Managestaycation />} />
            <Route
              path="Tambahkandatastaycation"
              element={<Managestaycation />}
            />
            <Route
              path="*"
              element={
                <Box w="4xl">
                  <Text fontSize="4xl" textAlign="center">
                    Halaman tidak ditemukan : 404
                  </Text>
                </Box>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Emptypage />} />
      </Routes>
    </BrowserRouter>
  );
}
