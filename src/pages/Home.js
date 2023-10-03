import HomeCSS from "../styles/home.module.css";
import Ztext from 'react-ztext';
import { ArrowDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { gsap } from "gsap";
import React from "react";

export default function Home() {

    const { colorMode, toggleColorMode } = useColorMode();
    const doColorMode = ({ currentTarget }) => {
        var tl = gsap.timeline({onComplete: toggleColorMode()});
        tl.fromTo(currentTarget, {rotation: 0}, { rotation: 360, duration: 0.2, ease: "linear"});
    }
    const bgColor = useColorModeValue('white', '#141313');

    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className={HomeCSS.section}>
                {/* <div className={HomeCSS.landing}> */}
                    <img className={HomeCSS.logo} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                    <div className={HomeCSS.theme} onClick={doColorMode}>
                        {colorMode === 'light' ? <MoonIcon className={HomeCSS.dark} boxSize="100%"/> : <SunIcon className={HomeCSS.light} boxSize="100%"/>}
                    </div>
                    <div className={HomeCSS.hero} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                        <Ztext
                            depth='5rem'
                            direction='both'
                            event='pointer'
                            eventRotation='15deg'
                            eventDirection='default'
                            fade={false}
                            layers={10}
                            perspective='8000px'
                            style={{
                                fontSize: 'calc(5.5vw + 5.5vh)',
                                fontWeight: '500',
                                color: 'white'
                            }}
                        >
                            <span>
                                Will M
                            </span>
                        </Ztext>
                        <div className={HomeCSS.subtitle}>
                            <p>Computer Science Student</p>
                        </div>
                    </div>
                    <div className={HomeCSS.continue} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                        <ArrowDownIcon className={HomeCSS.arrow} boxSize="100%"/>
                    </div>
                {/* </div> */}
            </div> 
            <div className={HomeCSS.section}>
                <div className={HomeCSS.info}>
                    <div className={HomeCSS.textSection} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                        <h1 className={HomeCSS.sectionTitle}>
                            About Me
                        </h1>
                        <p className={HomeCSS.sectionText}>
                            Hi there! I'm Will, a Computer Science student at the University of Glasgow. 
                            I'm passionate about software engineering and web development, and I'm always 
                            looking for new opportunities to learn and grow. I'm currently looking for an 
                            internship position for Summer 2024, so feel free to reach out!
                        </p>
                    </div>
                    <div className={HomeCSS.sectionMedia}>
                        <img className={HomeCSS.sectionImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                    </div>
                </div>
            </div>
            <div className={HomeCSS.section}>
                <div className={HomeCSS.info} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <div className={HomeCSS.sectionMedia}>
                        <div className={HomeCSS.projectGrid}>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>Online Portfolio</h1>
                                <p className={HomeCSS.projectDescription}>React, JS, HTML, CSS</p>
                            </div>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>Solar System Simluation</h1>
                                <p className={HomeCSS.projectDescription}>Python</p>
                            </div>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>E-Commerce Website</h1>
                                <p className={HomeCSS.projectDescription}>Django, Python, JS, HTML, CSS</p>
                            </div>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>Top Trumps Bot</h1>
                                <p className={HomeCSS.projectDescription}>JS</p>
                            </div>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>Project 1</h1>
                                <p className={HomeCSS.projectDescription}>Project Description</p>
                            </div>
                            <div className={HomeCSS.project}>
                                <img className={HomeCSS.projectImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 className={HomeCSS.projectTitle}>Project 1</h1>
                                <p className={HomeCSS.projectDescription}>Project Description</p>
                            </div>
                        </div>
                    </div>
                    <div className={HomeCSS.textSection}>
                        <h1 className={HomeCSS.sectionTitle}>
                            Projects
                        </h1>
                        <p className={HomeCSS.sectionText}>
                            Here are some of my projects! <br />
                            Click them for more information...
                        </p>
                    </div>
                </div>
            </div>
            <div className={HomeCSS.section}>
                <div className={HomeCSS.info}>
                    <div className={HomeCSS.textSection} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                        <h1 className={HomeCSS.sectionTitle}>
                            Experience
                        </h1>
                        <p className={HomeCSS.sectionText}>
                            .
                        </p>
                    </div>
                    <div className={HomeCSS.sectionMedia}>
                        <img className={HomeCSS.sectionImage} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                    </div>
                </div>
            </div>
        </div>
    );
}