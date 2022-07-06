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
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
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
  IoLogOutOutline,
} from "react-icons/io5";

import Logo from "../Asset/Logo.png";
import { useStickyBox } from "react-sticky-box";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Alertcomponent = ({ isOp, cancref, oncl, onclose }) => (
  <AlertDialog isOpen={isOp} leastDestructiveRef={cancref} onClose={oncl}>
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Log out
        </AlertDialogHeader>

        <AlertDialogBody>Apakah anda ingin keluar?</AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancref} onClick={oncl}>
            Batalkan
          </Button>
          <Button colorScheme="red" onClick={onclose} ml={3}>
            Logout
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);

export default function Navigation({ user }) {
  const stickref = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <Flex>
      <Box
        backgroundColor="blue.600"
        w="fit-content"
        p="10"
        ref={stickref}
        position="absolute"
        top={0}
        bottom={0}
        height={'4xl'}
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
                    backgroundColor={"#FF5F7E"}
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
                    backgroundColor={"white"}
                    p={2}
                    borderRadius={10}
                    w={"52"}
                  >
                    <Box mr={5}>
                      <IoHomeOutline color="#FF5F7E" size={20} />
                    </Box>
                    <Text fontWeight="Regular" color={"#FF5F7E"}>
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
                    backgroundColor={"#FF5F7E"}
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
                    backgroundColor={"white"}
                    p={2}
                    borderRadius={10}
                    w={"52"}
                  >
                    <Box mr={5}>
                      <IoCashOutline color="#FF5F7E" size={20} />
                    </Box>
                    <Text fontWeight="Regular" color={"#FF5F7E"}>
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
                    backgroundColor={"#FF5F7E"}
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
                    backgroundColor={"white"}
                    p={2}
                    borderRadius={10}
                    w={"52"}
                  >
                    <Box mr={5}>
                      <IoPersonOutline color="#FF5F7E" size={20} />
                    </Box>
                    <Text fontWeight="Regular" color={"#FF5F7E"}>
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
                    backgroundColor={"#FF5F7E"}
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
                    backgroundColor={"white"}
                    p={2}
                    borderRadius={10}
                    w={"52"}
                  >
                    <Box mr={5}>
                      <IoBuildOutline color="#FF5F7E" size={20} />
                    </Box>
                    <Text fontWeight="Regular" color={"#FF5F7E"}>
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
                    backgroundColor={"#FF5F7E"}
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
                    backgroundColor={"white"}
                    p={2}
                    mb={5}
                    borderRadius={10}
                    w={"52"}
                  >
                    <Box mr={5}>
                      <IoNewspaperOutline color="#FF5F7E" size={20} />
                    </Box>
                    <Text fontWeight="Regular" color={"#FF5F7E"}>
                      Laporan
                    </Text>
                  </Flex>
                )
              }
            />
          </ListItem>
          <ListItem>
            <Button
              backgroundColor={"white"}
              p={2}
              mt="5"
              borderRadius={10}
              w={"52"}
              leftIcon={<IoLogOutOutline color="#FF5F7E" size={20} />}
              onClick={onOpen}
              color="#FF5F7E"
            >
              Keluar
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box w={["10", "20", "40"]} />
      <Box mt="20" w={["2xl", "3xl", "4xl", "5xl"]}>
        <Outlet />
        <Alertcomponent
          isOp={isOpen}
          cancref={cancelRef}
          oncl={onClose}
          onclose={() => {
            localStorage.setItem("token", "false");
            navigate("/", { replace: true });
          }}
        />
      </Box>
    </Flex>
  );
}
