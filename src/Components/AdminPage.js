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
import Actions from "./Actions";
const AdminPage = (props) => {
  // api.executeCommand(
  //   "sendEndpointTextMessage",
  //   "receiverParticipantId",
  //   "text"
  // );

  const buttonStyle = { m: 2, bg: "blue.400", color: "white" };
  const [api, setApi] = useState(null);
  return (
    <Box mx="30px">
      <Stack>
        <Jitsi {...{ setApi }} />
        <Actions {...{ api }} />
      </Stack>
    </Box>
  );
};
export default AdminPage;
