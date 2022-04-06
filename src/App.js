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
  Home,
} from "./Pages";

import {
  IoHomeSharp,
  IoBedSharp,
  IoCalendarNumberSharp,
  IoFastFood,
  IoPersonSharp,
  IoCashSharp,
  IoBuildSharp,
  IoNewspaperSharp,
} from "react-icons/io5";
import { Flex, List, ListItem, Text, Box } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <List spacing={2} mr={4} ml={4}>
        <ListItem backgroundColor={"azure"} p={2} borderRadius={10} w={"52"}>
          <Link to="/">
            <Flex>
              <Box mr={5}>
                <IoHomeSharp color="blue" size={20} />
              </Box>
              <Text fontWeight="semibold">Home</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem backgroundColor={"azure"} p={2} borderRadius={10} w={"52"}>
          <Link to="/">
            <Flex>
              <Box mr={5}>
                <IoCashSharp color="blue" size={20} />
              </Box>
              <Text fontWeight="semibold">Transaction</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem backgroundColor={"azure"} p={2} borderRadius={10} w={"52"}>
          <Link to="/">
            <Flex>
              <Box mr={5}>
                <IoPersonSharp color="blue" size={20} />
              </Box>
              <Text fontWeight="semibold">User</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem backgroundColor={"azure"} p={2} borderRadius={10} w={"52"}>
          <Link to="/">
            <Flex>
              <Box mr={5}>
                <IoBuildSharp color="blue" size={20} />
              </Box>
              <Text fontWeight="semibold">Manage</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem backgroundColor={"azure"} p={2} borderRadius={10} w={"52"}>
          <Link to="/">
            <Flex>
              <Box mr={5}>
                <IoNewspaperSharp color="blue" size={20} />
              </Box>
              <Text fontWeight="semibold">Report</Text>
            </Flex>
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
  );
}

export default App;
