import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages";
import Main from "./Main";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
