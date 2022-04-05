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
} from "./Pages";

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Makanan />} />
          <Route path="/Tambahkandatawisata" element={<Managewisata />} />
          <Route path="/Editwisata/:id" element={<Managewisata />} />
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
