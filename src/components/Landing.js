import Ztext from 'react-ztext';
import { ArrowDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from '@chakra-ui/react';
import { gsap } from "gsap";
import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Stack,
  } from '@chakra-ui/react'
import { EmailIcon, DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import CV from '../Will-Murphy.pdf';

export default function Landing() {

    const { colorMode, toggleColorMode } = useColorMode();
    const doColorMode = ({ currentTarget }) => {
        var tl = gsap.timeline({onComplete: toggleColorMode()});
        tl.fromTo(currentTarget, {rotation: 0}, { rotation: 360, duration: 0.2, ease: "linear"});
    }

    const Overlay = () => (
        <ModalOverlay
          backdropFilter='blur(10px)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<Overlay />)

    function openCV() {
        window.open(CV, '_blank');
    }

    function openEmail() {
        window.open('mailto:williamalexandermurphy1@gmail.com', '_blank');
    }

    function openGithub() {
        window.open('https://github.com/Illogicalll', '_blank');
    }

    function openLinkedin() {
        window.open('https://www.linkedin.com/in/will-murphy-34a280290/', '_blank');
    }

    function scroll() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    const [atTop, setatTop] = useState(true);
    const ScrollToTopButton = () => {
        
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setatTop(true);
          } else {
            setatTop(false);
          }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    }

    return (
        <div class="section">
            <img class="logo" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." onClick={() => {
                setOverlay(<Overlay />) 
                onOpen()}
            }/>
            <div style={{position: "absolute", display:"flex", flexDirection:"row", alignItems: "end", width: "4%", height: "auto", top: "7%", left: "2%", }}>
                <img src="/arrow.png" alt="arrow" style={{transform: "rotate(-20deg)"}}></img>
                <p style={{fontSize: "1vw", transform: "translateY(15px)", textAlign: "center"}}>Contact Me!</p>
            </div>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                <ModalHeader style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>Contact Info and Links</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Stack direction='column' spacing={4}>
                    <Button rightIcon={<DownloadIcon style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />} colorScheme='gray' variant='solid' onClick={openCV}>
                        Download CV
                    </Button>
                    <Button rightIcon={<EmailIcon style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />} colorScheme='gray' variant='outline' onClick={openEmail}>
                        Email Me
                    </Button>
                    <Button rightIcon={<ExternalLinkIcon style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />} colorScheme='gray' variant='outline' onClick={openGithub}>
                        GitHub Profile
                    </Button>
                    <Button rightIcon={<ExternalLinkIcon style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />} colorScheme='gray' variant='outline' onClick={openLinkedin}>
                        LinkedIn
                    </Button>
                </Stack>
                </ModalBody>
                <ModalFooter />
                </ModalContent>
            </Modal>
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
            <ScrollToTopButton />
                <div class="continue" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none', opacity: atTop === true ? '1' : '0'}} onClick={scroll}>
                    <ArrowDownIcon class="arrow" boxSize="100%"/>
                </div>
        </div> 
    );
}