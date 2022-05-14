import { Box,  Flex, Heading, Image, Stack, Text, useColorMode, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });
const Home = () => {
    const { colorMode } = useColorMode(); 
    return (
        <Box bg={colorMode === 'dark' ? 'url("/images/voo.svg")': 'url("/images/ass.svg")'} w={'full'} h={'100vh'} style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }} textAlign='center'>
            <Box textAlign="center" fontSize="xl" >
                <Flex align="center" justifyContent="center" minH="100vh" p={3} textAlign="center">
                    <Stack align="center" justifyContent={'center'} wrap={'wrap'}  >
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '6xl', sm: '6xl', lg: '6xl' }}
                            style={{ 
                                transform: 'translateY(50%)'
                            }}
                            >
                            <ChakraBox
                                // as={motion.div}
                                fontFamily={'alice'}
                            fontSize={{ base: '5rem', sm: '6rem', lg: '7rem' }}
                                // color={'white'}
                                position={'relative'}
                                style={{
                                    zIndex: 3
                                }}
                                  animate={{ y: [-100, 0], opacity: [0, 0.5, 1] }}
                                  // @ts-ignore no problem in operation, although type error appears.
                                  transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    delay: 1,
                                    x: { type: "spring", stiffness: 100 },
                                    default: { duration: 2 },
                                  }}
                                >
                                B<span style={{ color: '#2C5282' }} >I</span>NARY
                            </ChakraBox>
                            <Text as={'span'} color={'blue.200'} fontSize='3xl' 
                             fontFamily={''}
                             bg={colorMode === 'dark' ? 'transparent' : 'white'}
                            >
                                It's all about 0's and 1's
                            </Text>
                        </Heading>
                        <Box m={0} p={0} >
                            <Image src={'/images/sally.svg'}  boxSize='sm' objectFit='cover'  />
                        </Box>
                        
                    </Stack>
                </Flex>
            </Box>
            <Box>
                
            </Box>
        </Box>
    )
}

export default Home;