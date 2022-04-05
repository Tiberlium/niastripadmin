import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { BsHouseFill } from "react-icons/bs";
class App extends react.Component {
  render() {
    return (
      <Box>
        <BrowserRouter>
          <List>
            <ListItem>
              <BsHouseFill color="red" size={30} />
              <Link to="/">
                <Text fontWeight="medium" fontSize={20} color={"black"}>
                  Home
                </Text>
              </Link>
            </ListItem>
          </List>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/Tambahkandatawisata" element={<Managewisata />} />
            <Route path="/Editwisata/:id" element={<Managewisata />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}

export default App;
