import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { ChakraProvider } from "@chakra-ui/react";
import ChoosePage from "./Components/ChoosePage";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <ChoosePage />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
