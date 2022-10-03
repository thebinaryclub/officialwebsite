import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const About = () => {
  return (
    <Box py={'40px'} bg={'black'} color="white">
      <Flex alignItems={'center'} justify={'space-evenly'} flexWrap="wrap" >
        <Flex direction={'column'} justify="space-between"  h={'700px'} p={'40px'} maxWidth={'600px'}>
          <Text>
            <Heading py={'10px'} className="text-1">
              About Binary Hacks
            </Heading>
          </Text>
          <Text>
            <Heading py={'10px'} className="text-1">
              You belong in tech
            </Heading>
            <Text fontWeight={'bold'}>
            It might be challenging to break into the tech industry. To make that easier, we are here. BinaryHacks is committed to fostering an open and egalitarian environment for its participants, who hail from a variety of cultures and experiences around the world. By keeping diversity, equity, and inclusion in mind as we work, we hope to create a welcoming environment where everyone may feel free to follow their aspirations.
            </Text>
          </Text>
        </Flex>
        <Box>
        <Image src={require('./BinaryHacks.png')} w='450px' h="700px" />
        </Box>
      </Flex>
            
    </Box>
  )
}

export default About;