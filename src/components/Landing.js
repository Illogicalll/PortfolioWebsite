import Ztext from 'react-ztext';
import { ArrowDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from '@chakra-ui/react';
import { gsap } from "gsap";
import React from "react";

export default function Landing() {

    const { colorMode, toggleColorMode } = useColorMode();
    const doColorMode = ({ currentTarget }) => {
        var tl = gsap.timeline({onComplete: toggleColorMode()});
        tl.fromTo(currentTarget, {rotation: 0}, { rotation: 360, duration: 0.2, ease: "linear"});
    }

    return (
        <div class="section">
            <img class="logo" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
            <div class="theme" onClick={doColorMode}>
                {colorMode === 'light' ? <MoonIcon class="dark" boxSize="100%"/> : <SunIcon class="light" boxSize="100%"/>}
            </div>
            <div class="hero" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
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
                <div class="subtitle">
                    <p>Computer Science Student</p>
                </div>
            </div>
            <div class="continue" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                <ArrowDownIcon class="arrow" boxSize="100%"/>
            </div>
        </div> 
    );
}