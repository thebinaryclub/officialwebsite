import { Box, Flex, Image, Text, Heading, useColorMode, useColorModeValue, Spacer } from '@chakra-ui/react';
import React from 'react'
import './about.css'
const About = () => {
  const { colorMode } = useColorMode();
  return (
    <div style={{ minHeight: '100vh', minWidth: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        height: '100%'
      }}>
        {
          colorMode === 'dark' ? (<Image src={'/images/newbg.svg'} w={'100%'}
            objectFit='cover'
            align={'center'}
            h={'100%'} />) : ''
        }
      </div>
      <Box py={20} px={{ base: 4, sm: 10, md: 20, lg: 20 }} width='100%' minHeight={'100vh'} style={{ position: 'relative', backgroundColor: '' }}>
        <Flex
          minH={'100px'}
          py={{ base: 5 }}
        >
          <Heading
            // lineHeight={1.1}
            // fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}
          >

            <Text
              // fontSize={{base: '2x1', sm: '2x1', lg: '4x1'}}
              style={{
                border: '2px solid purple',
                borderTopLeftRadius: '35px',
                borderBottomRightRadius: '35px',
                position: 'relative',
              }}
              fontFamily={'alice'}
              p={2}
            >About Binary Club</Text>
          </Heading>
        </Flex>
        <Box py={20}>
          <Flex
            justifyContent={'space-between'}
            wrap={'wrap'}
            style={{
              zIndex: '5'
            }}
          >
            <Box>
              <Text
                fontSize='xl'
                maxWidth={'45rem'}
                bg={'blue.800'}
                p={10}
                style={{
                  // backgroundColor: `${'purple.400'}`,
                  boxShadow: `10px 10px ${useColorModeValue('black', 'white')}`,
                  lineHeight: '1.2em'
                }}
                color={'white'}
              >
                <Heading fontFamily={'alice'} color={'green.400'} p={2} align={'center'} >Mission of Binary Club</Heading>
                To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
              </Text>
              <Spacer />
              <Text
                mt={20}
                fontSize='xl'
                maxWidth={'45rem'}
                bg={'blue.800'}
                p={10}
                style={{
                  boxShadow: `10px 10px ${useColorModeValue('black', 'white')}`,
                  lineHeight: '1.2em'
                }}
                color={'white'}
              >
                <Heading fontFamily={'alice'} color={'green.400'} p={2} align={'center'}>Why join?</Heading>
                To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
              </Text>
            </Box>
            <Box w={'300px'} h={'300px'} className="box-move">
              <Image w={'100%'} h={'100%'} src={'/images/saly.svg'} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default About;
