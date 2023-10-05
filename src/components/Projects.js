import { useColorMode } from '@chakra-ui/react';

export default function Projects() {

    const { colorMode } = useColorMode();

    function redirectPortfolio() {
        window.open('https://github.com/Illogicalll/PortfolioWebsite', '_blank');
    }

    function redirectSolar() {
        window.open('https://github.com/Illogicalll/Solar-System-Simulation', '_blank');
    }

    function redirectTopTrumps() {
        window.open('https://github.com/Illogicalll/TopTrumps', '_blank');
    }

    function redirectEcom() {
        window.open('https://github.com/Illogicalll/WAD2GroupProject', '_blank');
    }

    function redirectProj5() {
        window.open('https://github.com/Illogicalll/WAD2GroupProject', '_blank');
    }

    return (
        <div class="section">
            <div class="projects">
                <div class={colorMode === 'dark' ? 'darkgrad slider' : 'lightgrad slider'}>
                    <div class="slidetrack">
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectPortfolio} alt="portfolio"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Online Portfolio</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectSolar} alt="solar"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Solar System Simluation</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectTopTrumps} alt="toptrumps"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">TopTrumps Game Chat-Bot</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectEcom} alt="ecom"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">E-Commerce Website</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectProj5} alt="project 5"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Project 5</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>


                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectPortfolio} alt="portfolio"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Online Portfolio</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectSolar} alt="solar"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Solar System Simulation</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectTopTrumps} alt="toptrumps"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">TopTrumps Chat-Bot</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectEcom} alt="ecom"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">E-Commerce Website</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img class="proj-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" onClick={redirectProj5} alt="project 5"></img>
                            <div class="projectinfo" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                                <h1 class="projecttitle">Project 5</h1>
                                <p class="projectdescription">Click Me!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="textsection" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <h1 class="sectiontitle">Projects</h1>
                    <p class="sectiontext">Here are some of my projects! <br /><br /> Whether they be work-related or just for personal enjoyment, <br /> these helped build out my understanding of the following languages and frameworks:<br /><br /> </p> 
                    <div class="skills" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                        <a href="https://www.python.org" target="_blank" rel="noreferrer">  <img class="proj-image" src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="python"/> </a>
                        <a href="https://openjdk.org/" target="_blank" rel="noreferrer"> <img class="proj-image" src="https://img.shields.io/badge/OpenJDK-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="openjdk"/> </a>
                        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">  <img class="proj-image" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5"/> </a>
                        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">  <img class="proj-image" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> </a>
                        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer"> <img class="proj-image" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="js"/> </a>
                        <a href="https://react.dev/" target="_blank" rel="noreferrer"> <img class="proj-image" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reacy"/> </a>
                        <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img class="proj-image" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="django"/> </a>
                    </div>
                    <br />
                    <div class="gitlinks">
                        <p>Clicking a project will take you to their respective</p>
                        <a href="https://github.com/Illogicalll" target="_blank" rel="noreferrer"> <img class="gitimg" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}/> </a>
                        <p>or</p>
                        <a href="https://stgit.dcs.gla.ac.uk/2766915m" target="_blank" rel="noreferrer"> <img class="gitimg" src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="gitlab" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}/> </a>
                        <p>pages</p>
                    </div>
                </div>
            </div>
        </div>
    );
}