import { useColorMode } from '@chakra-ui/react';
import React from "react";

export default function Footer() {

    const { colorMode } = useColorMode();

    return (
        <div class="footer" style={{filter: colorMode === 'dark' ? 'invert(100%)' : 'none'}}>
            <p>© 2023 Will Murphy</p>
        </div>
    );
}