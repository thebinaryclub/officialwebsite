import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/aclonica';

import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Home } from './screens/Home';
import Navbar from './components/Navbar';
import Footer from './containers/Footer'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
