import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./Asset/Logo.png";
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
  Transaction,
  Report,
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

import {
  Flex,
  List,
  ListItem,
  Text,
  Box,
  HStack,
  StackDivider,
  Image,
} from "@chakra-ui/react";
function App() {
  return (
    <BrowserRouter>
      <HStack
        spacing="12"
        divider={<StackDivider borderColor="gray.200" height={650} />}
      >
        <Box h={"full"} w={"48"} ml="10">
          <List spacing={4}>
            <Box ml={"10"} mt={"-16"} mb="20">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={Logo}
                alt="Dan Abramov"
              />
              <Text p={3} fontWeight="semibold" fontSize={20}>
                Nias Trip
              </Text>
            </Box>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <Link to="/">
                <Flex>
                  <Box mr={5}>
                    <IoHomeSharp color="blue" size={20} />
                  </Box>
                  <Text fontWeight="semibold">Home</Text>
                </Flex>
              </Link>
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <Link to="/Transaction">
                <Flex>
                  <Box mr={5}>
                    <IoCashSharp color="blue" size={20} />
                  </Box>
                  <Text fontWeight="semibold">Transaction</Text>
                </Flex>
              </Link>
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <Link to="/User">
                <Flex>
                  <Box mr={5}>
                    <IoPersonSharp color="blue" size={20} />
                  </Box>
                  <Text fontWeight="semibold">User</Text>
                </Flex>
              </Link>
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <Link to="/Manage">
                <Flex>
                  <Box mr={5}>
                    <IoBuildSharp color="blue" size={20} />
                  </Box>
                  <Text fontWeight="semibold">Manage</Text>
                </Flex>
              </Link>
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              mb={5}
              borderRadius={10}
              w={"52"}
            >
              <Link to="/Report">
                <Flex>
                  <Box mr={5}>
                    <IoNewspaperSharp color="blue" size={20} />
                  </Box>
                  <Text fontWeight="semibold">Report</Text>
                </Flex>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box h={"fit-content"} marginTop={"-60"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tambahkandatawisata" element={<Managewisata />} />
            <Route path="/Editwisata/:id" element={<Managewisata />} />
            <Route path="/User" element={<User/>}/>
            <Route path="/Transaction" element={<Transaction/>}/>
            <Route path="/Manage"/>
            <Route path="/Report" element={<Report/>}/>
            <Route />
          </Routes>
        </Box>
      </HStack>
    </BrowserRouter>
  );
}

export default App;
