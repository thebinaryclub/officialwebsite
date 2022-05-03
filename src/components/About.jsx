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
            <Text fontSize='5xl'
            style={{ 
              border: '2px solid #ed64a6',
              borderTopLeftRadius: '35px',
              borderBottomRightRadius: '35px'
            }}
        //   bg={'pink.400'}
        fontFamily={'aclonica'}
          p={2}
            >About</Text> 
        </Flex>
        <Box p={5}>
            <Flex
            align={'center'}
            justifyContent={'center'}
            w={'full'}
            >
                <Text
                fontSize='2xl'
                fontFamily={'Times Roman'}
                maxWidth={'45rem'}
                bg={'lightgray'}
                p={5}
                style={{
            backgroundColor: '#f56565',
                  boxShadow: '10px 10px',
                  lineHeight: '1.2em'
                }}
                >
                To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
                </Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default About;
