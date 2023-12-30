import { useColorMode } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import CV from '../Will-Murphy.pdf';
import { isMobile } from 'react-device-detect';

export default function Experience() {

    const { colorMode } = useColorMode();

    return (
        <div class="section">
            <div class={isMobile ? "infoMobile" : "info"}>
                <div class={isMobile ? "text-section-mobile" : "text-section"} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <h1 class={isMobile ? "section-title-mobile" : "section-title"}>
                        Experience
                    </h1>
                    <p class={isMobile ? "section-text-mobile" : "section-text"}>
                        Currently my computer science related experience is limited to my university work and personal endeavours.
                        However, my general work experience can be found on my <Link color='teal.500' href={CV} target='_blank' style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>CV</Link>.
                        <br/> <br/>
                        In terms of my university work, some examples of relevant courses I have taken include:
                        <ul style={{paddingLeft: '3vw'}}>
                            <li>Web Application Development</li>
                            <li>Object Oriented Software Engineering</li>
                            <li>Algorithms and Data Structures</li>
                            <li>Networks and Operating Systems</li>
                        </ul>
                    </p>
                </div>
                <div class="section-media">
                    <img class="section-image" src="/code.jpeg" style={{aspectRatio: '1 / 1', width: '30vw'}} alt="Will M." />
                </div>
            </div>
        </div>
    );
}