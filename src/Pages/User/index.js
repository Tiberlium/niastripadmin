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

  const get = async () => {
    let x = [];
    const docRef = await db.collection("Users").get();
    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setdata(x);
  };

  useEffect(() => {
    get();
  }, []);

  const onRemove = (id) => {
    db.collection("Users")
      .doc(id)
      .delete()
      .then(() => get());
  };
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<IoIosArrowForward color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Dashboard">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/User">
            User
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontSize={"5xl"} mt={10} ml={5}>
        List Pengguna
      </Text>
      <TableContainer>
        <Table variant="striped" w={[400, 500, 700]} size='sm'>
          <TableCaption>PENGGUNA</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Id</Th>
              <Th>Nama</Th>
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
                <Td>{doc.data.id}</Td>
                <Td>{doc.data.name}</Td>
                <Td>{doc.data.gender}</Td>
                <Td>{doc.data.email}</Td>
                <Td>
                  <Link to={`/Userdetail/${doc.id}`}>
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
