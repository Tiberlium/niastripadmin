import React from "react";
import {
  Text,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Box,
  Textarea,
  useToast,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Managepromo() {
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<FiChevronRight color="gray.500" />}
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Manage">
            Kelola
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Main/Promo">
            Promo
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">
            Form event
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
