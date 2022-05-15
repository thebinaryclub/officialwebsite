import { Flex, Text, Box, Image } from '@chakra-ui/react'
import React from 'react'
import TeamItem from './TeamItem';
import styled, { keyframes } from 'styled-components';

export const Foo = keyframes`
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

export const ItemMover = styled.div`
  animation: ${Foo} 10s linear 0s infinite;
  &:hover {
    animation-play-state: paused;
  }
`;
// const ChakraBox = chakra(motion.div, {
//   /**
//    * Allow motion props and the children prop to be forwarded.
//    * All other chakra props not matching the motion props will still be forwarded.
//    */
//   shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
// });

export const Team = () => {
  return (
    <div style={{position: 'relative'}}>
      {/* <Box position="absolute">
        <Image src={'/images/background/team.png'} style={{
          transform: 'rotate(180deg)'
        }} w={'100%'} h={'100%'}/>
      </Box> */}

    <Box py={10} px={{ base: 4, sm: 10, md: 20, lg: 20 }} width='100%' minHeight={'100vh'} style={{ position: 'relative' }}>

      <Flex
        pt={5}
        minH={'60px'}
        py={{ base: 2 }}
      >
        <Box
          // style={{
          //         border: '2px solid purple ',
          //         borderTopLeftRadius: '35px',
          //         borderBottomRightRadius: '35px'
          //     }}
          p={2}
        >
          <Text fontSize='5xl'
            //   bg={'pink.400'}
            fontFamily={'alice'}
            style={{
              border: '2px solid purple ',
              borderTopLeftRadius: '35px',
              borderBottomRightRadius: '35px'
            }}
            maxW={'auto'}
            p={2}
          >Meet the team</Text>
        </Box>
      </Flex>
      <Box overflow={'hidden'} style={{ overflow:'hidden'}}>

        <Flex

          direction={'row'} justifyContent={'space-between'} mt={'50px'} >

          <ItemMover>
            <Flex direction={['row']} justifyContent={'space-around'} overflow={'hidden'}
              style={{ overflow: 'hidden' }}>
              {teamNames.map((member) => (
                <>
                  <TeamItem name={member.name} title={member.title} image={member.image} description={member.description} link={member.link} />
                </>
              ))}
            </Flex>
          </ItemMover>

        </Flex>
      </Box>
      <Box  position="absolute" bottom={0} style={{
        zIndex:'-1',
        left: '0px'
      }}>
        <Image src={'/images/background/team.png'} w={'100%'} h={'100%'}/>
      </Box>
    </Box>
    </div>
  )
}


const teamNames = [
  {
    name: 'Aditya Bhadauriya',
    title: 'President',
    image: '/images/human.svg',
    description: 'I am a junior majoring in CSE',
    link: "https://9aditya9.biz",
  }
]