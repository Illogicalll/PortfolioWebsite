import { useColorMode } from '@chakra-ui/react';

export default function Projects() {

    const { colorMode } = useColorMode();

    return (
        <div class="section">
                <div class="info" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <div class="sectionMedia">
                        <div class="projectGrid">
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">Online Portfolio</h1>
                                <p class="projectDescription">React, JS, HTML, CSS</p>
                            </div>
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">Solar System Simluation</h1>
                                <p class="projectDescription">Python</p>
                            </div>
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">E-Commerce Website</h1>
                                <p class="projectDescription">Django, Python, JS, HTML, CSS</p>
                            </div>
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">Top Trumps Bot</h1>
                                <p class="projectDescription">JS</p>
                            </div>
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">Project 1</h1>
                                <p class="projectDescription">Project Description</p>
                            </div>
                            <div class="project">
                                <img class="projectImage" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}} />
                                <h1 class="projectTitle">Project 1</h1>
                                <p class="projectDescription">Project Description</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-section">
                        <h1 class="section-title">
                            Projects
                        </h1>
                        <p class="section-text">
                            Here are some of my projects! <br />
                            Click them for more information...
                        </p>
                    </div>
                </div>
            </div>
    );
}