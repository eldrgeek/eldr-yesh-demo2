import React, { useEffect } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

const buttonStyle = { maxW: "200px", m: 2, bg: "blue.400", color: "white" };

const AllowMicrophone = ({ closeAction }) => {
  function askForCameraAndMicrophone(event) {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function (stream) {
        closeAction();
        console.log("You let me use your camera and microphone!");
      })
      .catch(function (err) {
        closeAction();
        console.log("No camera and microphone for you!");
      });
    onOpen();
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const doClose = () => {
    onClose();
    closeAction();
  };
  useEffect(() => {
    askForCameraAndMicrophone();
    // onClose(() => closeAction());
    // isOpen(true)
  }, []);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={doClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Allow Microphone and Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              To get help from a human being, you'll need to give let this page
              use your microphone and video.
            </Text>
          </ModalBody>
          {/* <ModalFooter>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Human help
            </Button>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Bot help
            </Button>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Let me struggle
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AllowMicrophone;
