import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import React from 'react'
import './about.css'
const About = () => {
  return (
    <div style={{minHeight: '100vh', minWidth: '100%'}}>
    <Box width='100%' minHeight={'100vh'} style={{ position: 'relative', backgroundColor: '' }}>
      <div style={{
        // content: '',
        position: 'absolute',
        zIndex: '-1',
        // backgroundColor: 'red',
        width: '100%',
        height: '100%'
      }}>
        <Image src={'images/newbg.svg'} w={'100%'}
          objectFit='cover'
          align={'center'}
          h={'100%'} />
      </div>
      <Flex
        minH={'100px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        justifyContent={'center'}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '6xl', sm: '6xl', lg: '6xl' }}
        >

        <Text fontSize='5xl'
          style={{
            border: '2px solid purple',
            borderTopLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            position: 'relative',
          }}
          //   bg={'pink.400'}
          fontFamily={'alice'}
          p={2}
          _after={{
            content: "''",
            width: '100px',
            height: '20%',
            position: 'absolute',
            bottom: 1,
            left: '10px',
            bg: 'purple.400',
            zIndex: -1,
          }}
        >About Binary Club</Text>

        </Heading>
      </Flex>
      <Box p={5}>
        <Flex
          align={'center'}
          justifyContent={'space-around'}
          // w={'full'}
          wrap={'wrap'}
          // overflow={'hidden'}
          style={{
            zIndex: '5'
          }}
        >
          <Box>
          <Text
            fontSize='2xl'
            fontFamily={'Amaranth'}
            maxWidth={'45rem'}
            bg={'lightgray'}
            p={5}
            bgColor={'blue.800'}
            style={{
              // backgroundColor: `${'purple.400'}`,
              boxShadow: '10px 10px',
              lineHeight: '1.2em'
            }}
          >
            <Heading fontFamily={'alice'} color={'green.400'} p={2} align={'center'} >Mission of Binary Club</Heading>
            To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
          </Text>
          <Text
            mt={10}
            fontSize='2xl'
            fontFamily={'Amaranth'}
            maxWidth={'45rem'}
            bg={'lightgray'}
            p={5}
            bgColor={'blue.800'}
            style={{
              // backgroundColor: `${'purple.400'}`,
              boxShadow: '10px 10px',
              lineHeight: '1.2em'
            }}
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
