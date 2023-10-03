import { useColorMode } from '@chakra-ui/react';

export default function About() {

    const { colorMode } = useColorMode();

    return (
        <div class="section">
            <div class="info">
                <div class="text-section" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <h1 class="section-title">
                        About Me
                    </h1>
                    <p class="section-text">
                        Hi there! I'm Will, a Computer Science student at the University of Glasgow. 
                        I'm passionate about software engineering and web development, and I'm always 
                        looking for new opportunities to learn and grow. I'm currently looking for an 
                        internship position for Summer 2024, so feel free to reach out!
                    </p>
                </div>
                <div class="section-media">
                    <img class="section-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                </div>
            </div>
        </div>
    );
}