import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { Tooltip } from '@chakra-ui/react'

export default function Nav({sectionNames}) {

    const { colorMode } = useColorMode();

    return (
        <div class="nav">
            {sectionNames.map((sectionName, index) => (
                <Link
                activeStyle={{transition: 'opacity 0.3s ease', opacity: '0.2'}}
                key={index}
                to={sectionName}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                >
                    <Tooltip label={sectionName} aria-label="A tooltip" placement="left">
                        <div class="dot" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
                    </Tooltip>
                </Link>
            ))}
        </div>
    );
}