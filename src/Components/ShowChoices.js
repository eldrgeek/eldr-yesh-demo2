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

const ShowChoices = ({ closeAction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const doClose = () => {
    onClose();
    if (closeAction) closeAction();
  };
  useEffect(() => {
    onOpen();
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
          <ModalHeader>How do you want to see YeshID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              There are three ways to see how easy YeshID is to install.
              <br />
              <br />
              You can watch a video and watch our CEO install YeshID on her own
              computer.
              <br />
              <br />
              You can install YeshID following some easy prompts
              <br />
              <br />
              You can talk to a YeshID expert, share your screen and have them
              walk you through the process
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Watch video
            </Button>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Self-install
            </Button>
            <Button m="2" colorScheme="blue" onClick={doClose}>
              Get expert help
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ShowChoices;
