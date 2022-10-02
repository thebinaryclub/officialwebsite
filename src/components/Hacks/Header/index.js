import React from 'react'
import { Box, Center, Flex, Image, Text, Heading, useColorMode, useColorModeValue, Spacer, Button } from '@chakra-ui/react';
import './styles.css';

const Header = () => {
  return (
    <Box  className='header'>
        <Box className="header-text">
          <Center className="head-text">
            binaryhacks();
          </Center>
          <Center className="slogan-text">
            it's all about 0's & 1's
          </Center>
          <Center style={{alignSelf: 'center', top: '50px'}}>
            <Button colorScheme='teal' variant='outline' fontWeight='bold' spacing={8}  fontSize='24px' padding='30px'
  lineHeight='1.2rem'>
              Apply Now
            </Button>
          </Center>
        </Box>
    </Box>
   
  )
}

export default Header;