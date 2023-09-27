import HomeCSS from "../styles/home.module.css";
import Ztext from 'react-ztext';
import { ArrowDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from '@chakra-ui/react';
import { gsap } from "gsap";
import React from "react";

export default function Home() {

    const { colorMode, toggleColorMode } = useColorMode();
    let animation;

    const onEnter = ({ currentTarget }) => {
        // animation = gsap.to(currentTarget, {rotation:360, duration: 3, ease: "linear", repeat: -1});
    }

    const onLeave = ({ currentTarget }) => {
        // if (animation) {
        //     animation.kill();
        // }
        // gsap.to(currentTarget, {rotation:0, duration: 0.5});
    }

    const doColorMode = ({ currentTarget }) => {
        var tl = gsap.timeline({onComplete: toggleColorMode()});
        if (animation) {
            animation.kill();
        }
        tl.fromTo(currentTarget, {rotation: 0}, { rotation: 360, duration: 0.2, ease: "linear"});
    }

    return (
        <div>
            <div className={HomeCSS.section}>
                <div className={HomeCSS.landing}>
                    <img className={HomeCSS.logo} src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                    <div className={HomeCSS.theme} onClick={doColorMode} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        {colorMode === 'light' ? <MoonIcon boxSize="100%"/> : <SunIcon boxSize="100%"/>}
                    </div>
                    <div className={HomeCSS.hero}>
                        <Ztext
                            depth='5rem'
                            direction='both'
                            event='pointer'
                            eventRotation='10deg'
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
                                Will M.
                            </span>
                        </Ztext>
                        <div className={HomeCSS.subtitle}>
                            <p>Computer Science Student</p>
                        </div>
                    </div>
                    <div className={HomeCSS.nav}>
                        nav
                    </div>
                    <div className={HomeCSS.continue}>
                        <ArrowDownIcon className={HomeCSS.arrow} boxSize="100%"/>
                    </div>
                </div>
            </div> 
        </div>
    );
}