import { Box, Icon, Text, Stack, Flex, Image, Spacer } from '@chakra-ui/react';
import { FcAssistant } from 'react-icons/fc';
import { Parallax } from 'react-scroll-parallax';
import './domain.css';
const Feature = ({ title, text = "", icon, style }) => {
    return (
        <Stack
            style={{ border: '1px solid gray' }}
            _hover={{ bg: `blue.800`, color: 'white' }}
            mt={10} p={4}
            fontFamily={'alice'}
        >
            <Flex
                align={'start'}
                justify={'start'}
                color={'white'}
                rounded={'full'}
                // bg={'gray.100'}
                mb={2}>
                {icon}
            </Flex>
            <Text fontWeight={800} fontSize={'xl'}>{title}</Text>
            <Text>{text}</Text>
        </Stack>

    );
};


export default function Domain() {
    return (
        <div style={{ minwidth: '100vw', minheight: '100vh' }}>

            <Box
                py={20}
                px={{ base: 4, sm: 10, md: 20, lg: 20 }}
                width='100%'
                minHeight={'100vh'}
                style={{ position: 'relative', backgroundColor: '' }}
            >
                <Flex
                    pt={5}
                    minH={'60px'}
                    py={{ base: 2 }}
                >
                    <Box
                        p={2}
                    >
                        <Text
                            fontSize='5xl'
                            fontFamily={'alice'}
                            style={{
                                border: '2px solid purple ',
                                borderTopLeftRadius: '35px',
                                borderBottomRightRadius: '35px'
                            }}
                            maxW={'fit-content'}
                            p={2}
                        >Domains</Text>
                        <Text
                            fontSize='2xl'
                            fontFamily={'Alex Brush'}
                            pt={2}
                        >Everything is covered at Binary Club</Text>
                    </Box>
                    <Box maxW={170} alignItems="center" pos={'absolute'} p={2} style={{
                        left: '350px',
                        top: '60px'
                    }}>
                        <Parallax
                            speed={0}
                        >
                            <Image src={'/images/domain.svg'} w={'100%'} h={'100%'} />
                        </Parallax>
                    </Box>
                </Flex>
                    <Box
                        py={10}
                        width={[
                            '100%', // 0-30em
                            // '70%', // 30em-48em
                            // '55%', // 48em-62em
                            // '55%', // 62em+
                        ]}
                    >
                        <Flex wrap={'wrap'}
                            // directon={['row', 'col']} 
                            w={'fit-content'}
                            style={{ padding: '0px', width: 'auto' }}>
                            {
                                Domains.map((domain) => {
                                    return (
                                        <>
                                        <Feature 
                                        title={domain.title} 
                                        text={domain.description} 
                                        icon={<Icon as={domain.icon} w={20} h={20} />} 
                                        />
                                        <Spacer />
                                        </>
                                    )
                                })
                            }
                        </Flex>
                    </Box>
            </Box>
        </div>
    );
}


const Domains = [
    {
        title: 'Web Development',
        icon: FcAssistant,
        description: 'Start you web development journey with the Binary club.'
    },
    {
        title: 'Web Development',
        icon: FcAssistant,
        description: 'Start you web development journey with the Binary club.'
    },
    {
        title: 'Web Development',
        icon: FcAssistant,
        description: 'Start you web development journey with the Binary club.'
    },
    {
        title: 'Web Development',
        icon: FcAssistant,
        description: 'Start you web development journey with the Binary club.'
    },
]