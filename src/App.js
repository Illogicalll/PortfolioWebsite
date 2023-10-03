// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import LuxyWrapper from "./components/LuxyWrapper";
import Nav from "./components/Nav";

export default function App() {

  const sectionNames = ['landing', 'about', 'projects', 'experience'];

  return (
    <div>
      <ChakraProvider>
        <Nav sectionNames={sectionNames} />
        <LuxyWrapper>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Home sectionNames={sectionNames} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </LuxyWrapper>
      </ChakraProvider>
    </div>
  );
}
