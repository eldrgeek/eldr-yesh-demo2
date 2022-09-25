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
import ShowChoices from "./ShowChoices";

import AllowMicrophone from "./AllowMicrophone";
import Jitsi from "./Jitsi";
import YeshIcon from "./YeshIcon";
import buttonStyle from "./buttonStyle";
import { openChrome, openVideo, testFn, openCenter } from "./Actions";
import { useQueryState } from "use-location-state";

const DisplayDeadSimple = ({ nextStep }) => {
  const copyBlock = [
    `When we stared YeshID our goal was to make Identity
  dead simple, fully secure, and to deliver value right away`,
    `As we'll show you, we're deliveirng on that promoise`,
    `Let's face it. The world of work is has changed. Those changes are 
  accellerating. Last Generation IAM systems were
  built for a world with distict work/home boundaries. A more bureucratic,
  slower-pased world. A world that saw identity diffferently.`,
    `Next Generation companies work more like us.
  `,
    `
  None of our team has "a work computer" and "a home computer",
   a "work phone" and a "home phone." 
  Some engineers have lots of computers and phones (engineers!!) but 
  we expect most at YeshID to have a portable computer and a phone that we use for both.`,
    `blah blah`,
    ""
  ];
  return (
    <>
      <Button {...buttonStyle} maxW="100px" onClick={openVideo}>
        Test
      </Button>
      <YeshIcon />
      <Text fontSize="4xl"> YeshID is Dead Simple to install </Text>

      {copyBlock.map((block, key) => (
        <Text key={key} fontSize="lg">
          {" "}
          {block}{" "}
        </Text>
      ))}
      <Button
        {...buttonStyle}
        maxW="100px"
        onClick={() => {
          nextStep(), openVideo();
        }}
      >
        Let me see!
      </Button>
    </>
  );
};
const UserIntro = (props) => {
  const [step, setStep] = useState(0);
  const [api, setApi] = useState(null);
  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    // if (step === 2) openVideo();
  }, [step]);
  return (
    <Box mx="30px">
      {/* {step} */}
      <Stack>
        {step < 2 ? <DisplayDeadSimple {...{ nextStep }} /> : null}
        {step === 1 ? <ShowChoices closeAction={nextStep} /> : null}
        {step === 2 ? <AllowMicrophone closeAction={nextStep} /> : null}
        {step === 3 ? <Jitsi {...{ setApi }} /> : null}
      </Stack>
    </Box>
  );
};
export default UserIntro;
