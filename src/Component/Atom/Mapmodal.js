import React, { Component } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

export default class Mapmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  render() {
    const { open, close, lat, long } = this.props;
    return (
      <Modal isOpen={open} onClose={close} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lokasi Wisata</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Map
                provider={osm}
                height={500}
                width={1200}
                dprs={[1, 2]}
                defaultCenter={[1.1603381323455186, 97.52212877347822]}
                defaultZoom={12}
                onClick={(e) => {
                  lat(e.latLng[0]);
                  long(e.latLng[1]);
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
