import React, { Component } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

export default class Mapmodal extends Component {
  maptilerProvider = maptiler("WCIEW9m9YztfxQQ2nfyB", "basic");
  state = {
    latitude: 0,
    longitude: 0,
  };
  render() {
    const { open, close } = this.props;
    return (
      <Modal isOpen={open} onClose={close} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lokasi Wisata</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Map
                provider={this.maptilerProvider}
                height={500}
                width={1200}
                dprs={[1, 2]}
                defaultCenter={[1.1603381323455186, 97.52212877347822]}
                defaultZoom={12}
                onClick={(e) => {
                  this.setState({ latitude: e.latLng[0] });
                  this.setState({ longitude: e.latLng[1] });
                }}
              >
                <Marker
                  width={50}
                  anchor={[this.state.latitude, this.state.longitude]}
                  color="red"
                />
                <ZoomControl />
              </Map>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
