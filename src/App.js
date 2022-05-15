import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/aclonica'
import "@fontsource/arbutus"
import "@fontsource/alegreya-sc"
import "@fontsource/alice"
import "@fontsource/alex-brush"
import "@fontsource/amaranth"

import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './screens/Home';
import './App.css'
import theme from './theme';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        {/* <Home /> */}
        <div style={{width: '100vw', height: '100vh', textAlign: 'center', transform: 'translate(0%, 50%)', fontSize: '50px'}}>Comming soon...</div>
      </ParallaxProvider>

    </ChakraProvider>
  );
}

export default App;
