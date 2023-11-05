import React from "react";
import { useColorMode } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
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

export default function About() {

    const { colorMode } = useColorMode();

    const Overlay = () => (
        <ModalOverlay
          backdropFilter='blur(10px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay] = React.useState(<Overlay />)

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

    return (
        <div class="section">
            <div class="info">
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
                <div class="text-section" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <h1 class="section-title">
                        About Me
                    </h1>
                    <p class="section-text">
                        Hi there! I'm Will, a Computer Science student at the University of Glasgow. 
                        I'm passionate about software engineering and web development, and I'm always 
                        looking for new opportunities to learn and grow. I'm currently looking for an 
                        internship position for Summer 2024, so feel free to <Link color='teal.500' onClick={onOpen} target='_blank' style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>reach out!</Link>
                    </p>
                </div>
                <div class="section-media">
                    <img class="section-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" style={{aspectRatio: '1 / 1', width: '30vw'}} alt="Will M." />
                </div>
            </div>
        </div>
    );
}