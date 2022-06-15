import React from "react";

import {
  Flex,
  List,
  ListItem,
  Text,
  Box,
  Image,
  Center,
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
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const stickref = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
  return (
    <Box
      backgroundColor="#342F2A"
      w="fit-content"
      p="10"
      height="660px"
      ref={stickref}
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
            to="/Main"
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
            to="/Main/Transaction"
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
            to="/Main/User"
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
            to="/Main/Manage"
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
            to="/Main/Report"
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
  );
}
