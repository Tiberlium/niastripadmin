import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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
  Manage,
  Transaction,
  Report,
} from "./Pages";

import {
  IoHome,
  IoBedSharp,
  IoCalendarNumberSharp,
  IoFastFood,
  IoPerson,
  IoCash,
  IoBuild,
  IoNewspaper,
  IoHomeOutline,
  IoCashOutline,
  IoPersonOutline,
  IoBuildOutline,
  IoNewspaperOutline,
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
              <Text p={3} fontWeight="bold" fontSize={20}>
                Nias Trip
              </Text>
            </Box>
            <ListItem>
              <NavLink
                to="/"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex
                      backgroundColor={"blue.400"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoHome color="white" size={20} />
                      </Box>
                      <Text fontWeight="bold" color="white">
                        Home
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      backgroundColor={"antiquewhite"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoHomeOutline color="blue" size={20} />
                      </Box>
                      <Text fontWeight="Regular" color={"blue"}>
                        Home
                      </Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem>
              <NavLink
                to="/Transaction"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex
                      backgroundColor={"blue.400"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoCash color="white" size={20} />
                      </Box>
                      <Text fontWeight="bold" color="white">
                        Transaction
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      backgroundColor={"antiquewhite"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoCashOutline color="blue" size={20} />
                      </Box>
                      <Text fontWeight="Regular" color={"blue"}>
                        Transaction
                      </Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem>
              <NavLink
                to="/User"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex
                      backgroundColor={"blue.400"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoPerson color="white" size={20} />
                      </Box>
                      <Text fontWeight="bold" color={"white"}>
                        User
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      backgroundColor={"antiquewhite"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoPersonOutline color="blue" size={20} />
                      </Box>
                      <Text fontWeight="Regular" color={"blue"}>
                        User
                      </Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem>
              <NavLink
                to="/Manage"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex
                      backgroundColor={"blue.400"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoBuild color="white" size={20} />
                      </Box>
                      <Text fontWeight="bold" color={"white"}>
                        Manage
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      backgroundColor={"antiquewhite"}
                      p={2}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoBuildOutline color="blue" size={20} />
                      </Box>
                      <Text fontWeight="Regular" color={"blue"}>
                        Manage
                      </Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem>
              <NavLink
                to="/Report"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex
                      backgroundColor={"blue.400"}
                      p={2}
                      mb={5}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoNewspaper color="white" size={20} />
                      </Box>
                      <Text fontWeight="bold" color={"white"}>
                        Report
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      backgroundColor={"antiquewhite"}
                      p={2}
                      mb={5}
                      borderRadius={10}
                      w={"52"}
                    >
                      <Box mr={5}>
                        <IoNewspaperOutline color="blue" size={20} />
                      </Box>
                      <Text fontWeight="Regular" color={"blue"}>
                        Report
                      </Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box h={"fit-content"} marginTop={"-80"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tambahkandatawisata" element={<Managewisata />} />
            <Route path="/Editwisata/:id" element={<Managewisata />} />
            <Route path="/User" element={<User />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/Manage" element={<Manage />} />
            <Route path="/Report" element={<Report />} />
            <Route />
          </Routes>
        </Box>
      </HStack>
    </BrowserRouter>
  );
}

export default App;
