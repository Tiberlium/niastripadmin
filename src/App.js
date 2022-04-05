import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "./Pages";


import Detailuser from './Component/Detailuser';

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/Tambahkandatawisata" element={<Managewisata />} />
          <Route path="/Editwisata/:id" element={<Managewisata />} />
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
