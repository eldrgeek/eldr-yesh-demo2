import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import QRCode from "react-qr-code";

const ShareTest = () => {
  const [result, setResult] = useState("Ready");
  const doShare = async () => {
    const shareData = {
      consttitle: "MDN",
      text: "Learn web development on MDN!",
      url: "https://developer.mozilla.org"
    };
    try {
      await navigator.share(shareData);
      setResult("MDN shared successfully");
    } catch (err) {
      setResult(`Error: ${err}`);
    }
  };
  useEffect(() => {
    if (!navigator.canShare) {
      setResult("canShare is not supported");
    }
  }, []);
  return (
    <Stack>
      <Box m={20} w={200} h={200}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={window.location.href}
          viewBox={`0 0 256 256`}
        />
      </Box>
      <Link href={window.location}>Ref</Link>
      <Box bg="black" color="white">
        hare {result}
      </Box>
      <Button colorScheme="blue" m={2} onClick={doShare}>
        ShareTest
      </Button>
    </Stack>
  );
};
export default ShareTest;
