import { Flex, Text, Box } from '@chakra-ui/react';
import Card from "./Card"
import React from 'react'
import './styles.css';

const content = [
  {
    headingText: 'Education',
    description: `The goal of education initiatives is to minimize the entry barrier to knowledge. The education track is for hackers who want to increase access to knowledge and raise awareness of particular issues.`
  },
  {
    headingText: 'Health',
    description: `Health-related projects can address issues with either personal wellbeing or public health (like COVID-19, etc). (mental health, fitness, etc).`
  },
  {
    headingText: 'Other',
    description: `This track is open to all your unique ideas in any sector. :)`
  }
]
const Tracks = () => {
  return (
    <Box className='tracks'>
      <Text
        color={'white.500'}
        textTransform={'uppercase'}
        fontWeight='bold'
        fontSize='4rem'
        fontFamily={'Nunito'}
        letterSpacing={1.1}
        >
        TRACKS
      </Text>
      <Flex color='white' className='items' justify={'space-around'} direction={['column', 'column', 'column', 'row']}>
        {
          content.map(item => (<Card headingText={item.headingText} description={item.description} />))
        }
      </Flex>
    </Box>
  )
}

export default Tracks;