import react from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Managewisata, Wisata } from "./Pages";

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wisata />} />
          <Route path="/Managewisata" element={<Managewisata />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
