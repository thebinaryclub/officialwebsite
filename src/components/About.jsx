import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const About = () => {
  return (
    <Box width='100%'>
        <Flex 
           minH={'60px'}
           py={{ base: 2 }}
           px={{ base: 4 }}
          align={'center'}
          justifyContent={'center'}
        >
                  {/* <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'absolute'}
        //   w={'full'}
          bg={'pink.400'}
          w={'100px'}
          h={'60px'}
          >
          </Flex> */}
            <Text fontSize='5xl'
        //   bg={'pink.400'}
        fontFamily={'aclonica'}
          p={2}
            >About</Text> 
        </Flex>
        <Box bg={''}>
            <Flex
            align={'center'}
            justifyContent={'center'}
            w={'full'}
            >
                <Text
                fontSize='3xl'
                maxWidth={'45rem'}
                >
                To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
                </Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default About;
