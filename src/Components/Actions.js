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
import buttonStyle from "./buttonStyle";
const chromeURL =
  "https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en";

const openAdmin = () => {
  const win = window.open(
    "https://admin.google.com",
    "admin",
    "toolbar=yes,menubar=yes,width=1200,height=500, left=200, top=200"
  );
};

const openCenter = () => {
  let popW = 300;
  let popH = 500;
  let url = "https://www.gooogle.com";
  var left = (window.screen.width - popW) / 2;
  // set thevertical center of the popup window the center of the screen.
  var top = (window.screen.height - popH) / 2;
  var newWindow = window.open(
    url,
    "centered",
    "resizable=yes, width=" +
      popW +
      ", height=" +
      popH +
      ", top=" +
      top +
      ", left=" +
      left
  );
  return newWindow;
};
const openChrome = () => {
  const win = window.open(
    chromeURL,
    "chrome",
    `width=${window.screen.width / 2},height=${window.screen.height},left=${
      window.screen.width
    },top=0`
  );
};
const openVideo = () => {
  // alert(
  //   `width=${window.screen.width / 2},height=${
  //     window.screen.height
  //   },left=0,top=0`
  // );
  const win = window.open(
    // window.location + "#page=video",
    window.location.href + "#page=video",
    "video",
    `width=${window.screen.width / 2},height=${
      window.screen.height
    },left=0,top=0`
  );
};
const Actions = ({ api }) => {
  const userSteps = [
    {
      name: "Share Your Screen",
      op: () => api.executeCommand("toggleShareScreen")
    },
    {
      name: "Start Recording",
      op: () =>
        api.executeCommand("startRecording", {
          mode: "stream", //recording mode, either `file` or `stream`.
          // dropboxToken: string, //dropbox oauth2 token.
          // shouldShare: boolean, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.
          // rtmpStreamKey: string, //the RTMP stream key.
          // rtmpBroadcastID: string, //the RTMP broadcast ID.
          youtubeStreamKey: "1y1z-1ttc-rzdg-13b7-0kgp" //the youtube stream key.
          // youtubeBroadcastID: string //the youtube broacast ID.
        })
    },
    { name: "Get YeshID Extension", op: openChrome },
    {
      name: "Stop Streaming for YeshID",
      op: () => api.executeCommand("stopRecording", "stream")
    },
    { name: "Register for YeshID" },
    { name: "Get Google Apps" },
    { name: "Get PasswordedApps" },
    { name: "Get Chrome Extensions" },
    { name: "Go To Admin", op: openAdmin },
    { name: "Get Device Info" },
    { name: "Visiility Summary" },
    { name: "SwitchSharing" },
    { name: "Get Chrome Extension" },
    { name: "Register for Yesh" },
    { name: "Get GoogleApps" },
    { name: "Get PasswordedApps" },
    { name: "Go To Admin" },
    { name: "Show Summary" }
  ];

  const [step, setStep] = useState(3);
  const doAction = () => {
    // setStep(step + 1);
    if (userSteps[step].op) {
      userSteps[step].op();
      console.log(userSteps[step].op + "");
    }
  };
  return (
    <Button {...buttonStyle} onClick={doAction}>
      
      {userSteps[step].name}
    </Button>
  );
};

export default Actions;
let seq = 0;
const testFn = () => {
  seq = seq % 3;

  // if (seq === 0) openCenter();
  // if (seq === 1) openAdmin();
  // if (seq === 2) openChrome();
  setTimeout(() => openAdmin(), 3000);
  // setTimeout(() => openCenter(), 1000);
  // setTimeout(() => openChrome(), 3000);

  seq++;
};
export { testFn, openVideo, openChrome, openAdmin, openCenter };
