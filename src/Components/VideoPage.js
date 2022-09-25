import React, { useState, useRef } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  AspectRatio,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import { openChrome, openVideo, testFn, openCenter } from "./Actions";

const ShowVideo = () => {
  return (
    <Stack>
      <Button maxW="100px" onClick={openChrome}>
        Test
      </Button>
      <AspectRatio ratio={1}>
        <iframe
          src="https://share.descript.com/embed/iYo5B8Gf3aH"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Stack>
  );
};
export default ShowVideo;
