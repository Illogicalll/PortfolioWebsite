import { useColorMode } from '@chakra-ui/react';

export default function Experience() {

    const { colorMode } = useColorMode();

    return (
        <div class="section">
            <div class="info">
                <div class="text-section" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
                    <h1 class="section-title">
                        Experience
                    </h1>
                    <p class="section-text">
                        .
                    </p>
                </div>
                <div class="section-media">
                    <img class="section-image" src="https://avatars.githubusercontent.com/u/68807296?v=4" alt="Will M." />
                </div>
            </div>
        </div>
    );
}