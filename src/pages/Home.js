import { useColorModeValue } from '@chakra-ui/react';
import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home({sectionNames}) {

    const bgColor = useColorModeValue('white', '#141313');

    return (
        <div style={{ backgroundColor: bgColor }}>
            {sectionNames.map((sectionName, index) => (
                <div key={index} id={sectionName}>
                    {index === 0 && <Landing />}
                    {index === 1 && <About />}
                    {index === 2 && <Projects />}
                    {index === 3 && <Experience />}
                </div>
            ))}
            <Footer />
        </div>
    );
}