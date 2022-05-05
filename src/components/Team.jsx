import { Flex, Text, Box, Stack, Spacer } from '@chakra-ui/react'
import React from 'react'
import TeamItem from './TeamItem';
import styled, { keyframes } from 'styled-components';

const Foo = keyframes`
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const ItemMover = styled.div`
  animation: ${Foo} 20s linear 0s infinite;
  &:hover {
    animation-play-state: paused;
  }
`;


export const Team = () => {
  return (
    <Box  style={{ overflow: 'hidden' }} >
      <Flex 
          pt={5}
           minH={'60px'}
          //  py={{ base: 2 }}
           px={{ base: 4 }}
          align={'center'}
          justifyContent={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
            <Text fontSize='5xl'
            style={{ 
              border: '2px solid #48BB78 ',
              borderTopLeftRadius: '35px',
              borderBottomRightRadius: '35px'
            }}
        fontFamily={'aclonica'}
          p={2}
            >Team</Text> 
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'} >

          <ItemMover>
        <Flex direction={['row']} justifyContent={'space-around'}  width={'auto'}>
          {teamNames.map((member) => (
            <>
          <TeamItem name={member.name} title={member.title} image={member.image} description={member.description} />
</>
          ))}
        </Flex>
          </ItemMover>

        </Flex>
    </Box>
  )
}


const teamNames = [
  { 
    name: 'Aditya Bhadauriya',
    title: 'President',
    image: '/images/human.svg',
    description: 'I am a junior majoring in CSE',
    links: {
      github: 'https://github.com/9aditya9',
      portfolio: 'https://9aditya9.biz'
    }
  },
  {
    name: 'Amit Vikram Seth',
    title: 'Management Head',
    image:'/images/human.svg',
    description: 'Enthusiast'
    },
  {
    name: 'Ravi Kumar Singh',
    title: 'Technical Manager, AI/ML Lead',
    image:'/images/human.svg',
    description: 'A developer and a Machine learning and blockchain enthusiast'
    },

]