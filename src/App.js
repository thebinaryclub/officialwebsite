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
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {Home} from './screens/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />

      <Box textAlign="center" fontSize="xl">
      </Box>
    </ChakraProvider>
  );
}

export default App;
