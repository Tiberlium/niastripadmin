import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Text,
  Box,
  TableContainer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  IoIosInformationCircle,
  IoMdTrash,
  IoIosArrowForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export default function User() {
  const [data, setdata] = useState([]);
  const toast = useToast();

  const isMounted = React.useRef();

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Users").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (isMounted.current) return setdata(x);
  };

  useEffect(() => {
    isMounted.current = true;
    get();
    return () => (isMounted.current = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemove = async (id) => {
    const docRef = await db.collection("User").doc(id).delete();

    const doctransact = await db
      .collection("Transaksi")
      .where("customerid", "==", id);

    docRef
      .then(() => {
        doctransact.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => doc.ref.delete());
        });
        toast({
          title: "Data di hapus.",
          description: "Data telah di berhasil hapus",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Data gagal di hapus.",
          description: "Ada kesalahan data gagal di hapus",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });

    get();
  };
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<IoIosArrowForward color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Pengguna
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} mt={10} mb={5}>
        Daftar Pengguna
      </Text>
      <TableContainer>
        <Table variant="striped" w={[400, 500, 800]} size="sm">
          <TableCaption>DAFTAR PENGGUNA</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Photo</Th>
              <Th>Nama</Th>
              <Th>Id</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Detail</Th>
              <Th>Hapus</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((doc, index) => (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>
                  <Image
                    src={doc.data.img}
                    height="10"
                    width="10"
                    borderRadius="full"
                  />
                </Td>
                <Td>{doc.data.name}</Td>
                <Td>{doc.data.id}</Td>
                <Td>{doc.data.gender}</Td>
                <Td>{doc.data.email}</Td>
                <Td>
                  <Link to={`/Main/Userdetail/${doc.id}`}>
                    <Button
                      colorScheme="green"
                      size="sm"
                      leftIcon={<IoIosInformationCircle />}
                    >
                      Detail
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    size="sm"
                    leftIcon={<IoMdTrash />}
                    mr={5}
                    onClick={() => onRemove(doc.id)}
                  >
                    Hapus
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
