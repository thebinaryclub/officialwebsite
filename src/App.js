import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/aclonica'

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {Home} from './screens/Home';
import './App.css'
import theme from './theme';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ChakraProvider theme={theme}>
            <ParallaxProvider>

      <Home />

      {/* <Box textAlign="center" fontSize="xl">
      </Box> */}
            </ParallaxProvider>

    </ChakraProvider>
  );
}

export default App;
