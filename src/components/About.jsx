import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import './about.css'
const About = () => {
  return (
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
            <Text fontSize='5xl'
            style={{ 
              border: '2px solid purple',
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
            justifyContent={'space-around'}
            // w={'full'}
            wrap={'wrap'}
            // overflow={'hidden'}
            style={{ 
              zIndex:'5'
            }}
            >
                <Text
                fontSize='2xl'
                fontFamily={'Times Roman'}
                maxWidth={'45rem'}
                bg={'lightgray'}
                p={5}
                bgColor={'purple.400'}
                style={{
                  // backgroundColor: `${'purple.400'}`,
                  boxShadow: '10px 10px',
                  lineHeight: '1.2em'
                }}
                >
                To provide exposure and knowledge of trending and upcoming technologies while at the same time educating the tech enthusiasts. Identify hidden talents, provide opportunities for students to realise their full potential, and accordingly shape them into future pioneers entrepreneurs and bridging the gap between students and alumni of college through mentorships
                </Text>
                {/* <Parallax
                  translateX={['300px', '0px']}
                  scale={[0.75, 1]}
                  rotate={[-180, 0]}
                  easing="easeInQuad"
                  speed={10}
                > */}
                <Box w={'300px'} h={'300px'} className="box-move">
              <Image w={'100%'} h={'100%'} src={'/images/saly.svg'} />
                </Box>
                {/* </Parallax> */}
            </Flex>
            {/* <Flex>
              <Image src={'/images/saly.svg'} />
            </Flex> */}
        </Box>
    </Box>
  )
}

export default About;
