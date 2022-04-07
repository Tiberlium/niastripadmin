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
              <Text p={3} fontWeight='bold' fontSize={20}>
                Nias Trip
              </Text>
            </Box>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <NavLink
                to="/"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex>
                      <Box mr={5}>
                        <IoHomeSharp color="blue" size={20} />
                      </Box>
                      <Text fontWeight="bold">Home</Text>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box mr={5}>
                        <IoHomeOutline color="black" size={20} />
                      </Box>
                      <Text fontWeight="Regular">Home</Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <NavLink
                to="/Transaction"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex>
                      <Box mr={5}>
                        <IoCashSharp color="blue" size={20} />
                      </Box>
                      <Text fontWeight="bold">Transaction</Text>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box mr={5}>
                        <IoCashOutline color="black" size={20} />
                      </Box>
                      <Text fontWeight="Regular">Transaction</Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <NavLink
                to="/User"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex>
                      <Box mr={5}>
                        <IoPersonSharp color="blue" size={20} />
                      </Box>
                      <Text fontWeight="bold">User</Text>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box mr={5}>
                        <IoPersonOutline color="black" size={20} />
                      </Box>
                      <Text fontWeight="Regular">User</Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              borderRadius={10}
              w={"52"}
            >
              <NavLink
                to="/Manage"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex>
                      <Box mr={5}>
                        <IoBuildSharp color="blue" size={20} />
                      </Box>
                      <Text fontWeight="bold">Manage</Text>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box mr={5}>
                        <IoBuildOutline color="black" size={20} />
                      </Box>
                      <Text fontWeight="Regular">Manage</Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
            <ListItem
              backgroundColor={"azure"}
              p={2}
              mb={5}
              borderRadius={10}
              w={"52"}
            >
              <NavLink
                to="/Report"
                children={({ isActive }) =>
                  isActive ? (
                    <Flex>
                      <Box mr={5}>
                        <IoNewspaperSharp color="blue" size={20} />
                      </Box>
                      <Text fontWeight="semibold">Report</Text>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box mr={5}>
                        <IoNewspaperOutline color="black" size={20} />
                      </Box>
                      <Text fontWeight="Regular">Report</Text>
                    </Flex>
                  )
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box h={"fit-content"} marginTop={"-60"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tambahkandatawisata" element={<Managewisata />} />
            <Route path="/Editwisata/:id" element={<Managewisata />} />
            <Route path="/User" element={<User />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/Manage" />
            <Route path="/Report" element={<Report />} />
            <Route />
          </Routes>
        </Box>
      </HStack>
    </BrowserRouter>
  );
}

export default App;
