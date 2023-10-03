import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-scroll';

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
                    <div class="dot" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
                </Link>
            ))}
        </div>
    );
}