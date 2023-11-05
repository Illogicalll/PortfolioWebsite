import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import LuxyWrapper from "./components/LuxyWrapper";
import Nav from "./components/Nav";

export default function App() {

  const sectionNames = ['Home', 'About', 'Projects', 'Experience'];

  return (
    <div>
      <ChakraProvider>
        <Nav sectionNames={sectionNames} />
        <LuxyWrapper>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Home sectionNames={sectionNames} />} />
              <Route path="*" element={<Home sectionNames={sectionNames} />} />
            </Routes>
          </BrowserRouter>
        </LuxyWrapper>
      </ChakraProvider>
    </div>
  );
}
