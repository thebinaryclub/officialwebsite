import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

const Card = ({ headingText, description }) => {
  return (
    <Center py={6} m={3} width='100%'>
      <Box
        w={'full'}
        bg='#202036'
        boxShadow={'2xl'}
        rounded={'2xl'}
        overflow={'hidden'}
        height='60vh'>

        <Stack>
          <Heading
            p={4}
            bg={'#4E1E7E'}
            color='white'
            fontSize={'5xl'}
            fontFamily={'Nunito'}
          >
            {headingText}
          </Heading>
          <Text color={'white'} fontSize='1.5rem' p={6} >
            {description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
export default Card;