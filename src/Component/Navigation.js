import React from "react";

import {
  Flex,
  List,
  ListItem,
  Text,
  Box,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";

import {
  IoHome,
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

import Logo from "../Asset/Logo.png";
import { useStickyBox } from "react-sticky-box";
import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  const stickref = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
  return (
    <Flex>
      <Box
        backgroundColor="#342F2A"
        w="fit-content"
        p="10"
        ref={stickref}
        height="3xl"
        position="absolute"
        top={0}
      >
        <List spacing={4}>
          <Center>
            <Box>
              <Image
                borderRadius="full"
                boxSize="100px"
                src={Logo}
                alt="No Images"
              />
              <Text p={3} fontWeight="bold" fontSize={20} color="white">
                Nias Trip
              </Text>
            </Box>
          </Center>
          <ListItem>
            <NavLink
              to="Home"
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
              to="Transaction"
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
                      Transaksi
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
                      Transaksi
                    </Text>
                  </Flex>
                )
              }
            />
          </ListItem>
          <ListItem>
            <NavLink
              to="User"
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
                      Pengguna
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
                      Pengguna
                    </Text>
                  </Flex>
                )
              }
            />
          </ListItem>
          <ListItem>
            <NavLink
              to="Manage"
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
                      Kelola
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
                      Kelola
                    </Text>
                  </Flex>
                )
              }
            />
          </ListItem>
          <ListItem>
            <NavLink
              to="Report"
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
                      Laporan
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
                      Laporan
                    </Text>
                  </Flex>
                )
              }
            />
          </ListItem>
        </List>
      </Box>
      <Spacer />
      <Outlet />
    </Flex>
  );
}
