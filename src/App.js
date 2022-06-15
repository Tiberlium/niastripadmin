import Dashboard from "./Main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Login } from "./Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
