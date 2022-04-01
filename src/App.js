import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Managewisata, Wisata } from "./Pages";

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wisata />} />
          <Route path="/Managewisata" element={<Managewisata />} />
          <Route path="/Managewisata/:id" element={<Managewisata />} />
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
