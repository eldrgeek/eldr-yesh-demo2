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

const Communication = ({ api, isAdmin }) => {
  if (isAdmin) {
    return "Admin";
  } else {
    return "User";
  }
  return null;
};
// const stuff = () =>
// api.executeCommand('toggleShareScreen');

// api.executeCommand('sendEndpointTextMessage', 'receiverParticipantId', 'text');
// api.executeCommand('startRecording', {
//   mode: string //recording mode, either `file` or `stream`.
//   dropboxToken: string, //dropbox oauth2 token.
//   shouldShare: boolean, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.
//   rtmpStreamKey: string, //the RTMP stream key.
//   rtmpBroadcastID: string, //the RTMP broadcast ID.
//   youtubeStreamKey: string, //the youtube stream key.
//   youtubeBroadcastID: string //the youtube broacast ID.
// });
// api.executeCommand('stopRecording',
//   mode: string //recording mode to stop, `stream` or `file`
// );
// api.addListener(event, listener);

// If you want to remove a listener you can use the removeListener method:

// api.removeListener(event, listener);
// {
// senderInfo: {
//     jid: string, // the jid of the sender
//     id: string // the participant id of the sender
// },
// eventData: {
//     name: string, // the name of the datachannel event: `endpoint-text-message`
//     text: string // the received text from the sender
// }
// }
// api.addListener(event, listener);

// api.removeListener(event, listener);
// }
export default Communication;
