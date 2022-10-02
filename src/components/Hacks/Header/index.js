import React from 'react';
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Heading,
  useColorMode,
  useColorModeValue,
  Spacer,
  Button,
} from '@chakra-ui/react';
import './styles.css';

const Header = () => {
  return (
    <Box position="relative">
      <Box bg="white" className="bg-container">
        <Image
          objectFit="center"
          align="center"
          className="bg-image"
          src={require('./bg.png')}
          alt="header"
        />
      </Box>
      <Flex className='head-text-container' flexDirection="column">
        <Text color={'white'} mt={6}><span className="text-1">In-person event</span> @ RKGIT</Text>
        <Button variant={'outline'} mt={6} colorScheme='teal' size='lg'>Apply Now</Button>
      </Flex>
    </Box>
  );
};

export default Header;
