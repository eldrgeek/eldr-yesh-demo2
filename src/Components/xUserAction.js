import React, { useState, useRef } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";
import Jitsi from "./Jitsi";
import YeshIcon from "./YeshIcon";
import { useQueryState } from "use-location-state";
const chromeURL =
  "https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en";
const Page = (props) => {
  const openEl = useRef(null);
  const [role, setRole] = useQueryState("role", "Customer");
  const [share, setShare] = useState(role !== "Customer");
  const [data, setData] = useState("undefined");

  // api.executeCommand(
  //   "sendEndpointTextMessage",
  //   "receiverParticipantId",
  //   "text"
  // );
  const openAdmin = () => {
    setData(JSON.stringify(document.location.href));
    const win = window.open(
      "https://admin.google.com",
      "something",
      "width=1200,height=500, left=200, top=200"
    );
  };
  const openChrome = () => {
    setData(JSON.stringify(document.location.href));
    const win = window.open(
      chromeURL,
      "something",
      "width=1200,height=500, left=200, top=200"
    );
  };
  const startShare = (event) => {
    console.log(event);
    if (event.metaKey) {
      setRole("yesh");
    } else {
      // setRole("something")
      setShare(true);
    }
  };
  const copyBlock = [
    `When we stared YeshID our goal was to make everything
  dead simple and effortless to use.`,
    `Bill Jones of SomeCorp currently holds the record for admin install. It took him just 36 seconds. `,

    `Our customers are amazed when they find how easy i is--We love amaziing users by providing a real human being, 
  not a chatbot to guide you through our 5 minute installation
  process`,
    ""
  ];
  const buttonStyle = { m: 2, bg: "blue.400", color: "white" };
  return (
    <Box mx="30px">
      <Stack>
        {/* <Text m={3}>
          role={role} share={share ? "true" : "false"}{" "}
        </Text> */}
        {share ? null : (
          <>
            <YeshIcon />
            <Text fontSize="4xl"> YeshID is Dead Simple to install </Text>
            {copyBlock.map((block) => (
              <Text fontSize="lg"> {block} </Text>
            ))}
          </>
        )}
        {share ? <Jitsi /> : null}
      </Stack>

      <Flex align="left" m={5}>
        {!share ? (
          <Button {...buttonStyle} onClick={startShare} ref={openEl}>
            Let me see!
          </Button>
        ) : (
          <>
            <Button {...buttonStyle} onClick={openChrome} ref={openEl}>
              Get YeshID Extension
            </Button>
            <Button o {...buttonStyle} onClick={openAdmin}>
              {" "}
              Enroll with YeshID
            </Button>
            {/* <Button {...buttonStyle}> Button 1</Button>) */}
          </>
        )}
        <Box></Box>
      </Flex>
    </Box>
  );
};
export default Page;
