import React, { Component } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default class Mapmodal extends Component {
  render() {
    const { open, close } = this.props;


    return (
      <Modal isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lokasi Wisata</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>hallo bangsat</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
