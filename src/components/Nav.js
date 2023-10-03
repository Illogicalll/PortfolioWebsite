import NavCSS from "../styles/nav.module.css";
import { useColorMode } from '@chakra-ui/react';

export default function Nav() {

    const { colorMode } = useColorMode();

    return (
        <div className={NavCSS.nav}>
            <div className={NavCSS.dot} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
            <div className={NavCSS.dot} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
            <div className={NavCSS.dot} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
            <div className={NavCSS.dot} style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}></div>
        </div>
    );
}