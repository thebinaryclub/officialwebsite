import { Box, Icon, Text, Stack, Flex, Image } from '@chakra-ui/react';
import { FcAssistant } from 'react-icons/fc';
import { Parallax } from 'react-scroll-parallax';
import './domain.css';
const Feature = ({ title, text="", icon, style }) => {
    return (
        <Stack
         style={{border: '1px solid gray'}} _hover={{bg: 'RGBA(255, 255, 255, 0.04)'}} m={2} p={4}>
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
        <div style={{minwidth: '100vw', minheight: '100vh'}}>

        <Box  mt={5} pos={'relative'} w={'100%'} mb={5}
        
        >
            <Flex
                pt={5}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}
                justifyContent={'center'}
            >
                <Text fontSize='5xl'
                    style={{
                        border: '2px solid purple ',
                        borderTopLeftRadius: '35px',
                        borderBottomRightRadius: '35px'
                    }}
                    //   bg={'pink.400'}
                    fontFamily={'aclonica'}
                    p={2}
                >Domains</Text>
            </Flex>
            <Flex overflow={'hidden'} mt={5}
                        wrap={'wrap'}
                        justifyContent={'space-around'}

            >
                <Box  
                  width={[
                    '100%', // 0-30em
                    '70%', // 30em-48em
                    '55%', // 48em-62em
                    '55%', // 62em+
                  ]}
                >
                <Flex wrap={'wrap'} direction={['row', 'col']} w={'fit-content'} align='center' justifyContent={'center'} style={{ padding: '0px', width: 'auto' }}> 
                {
                    Domains.map((domain) => {
                        return(
                       <Feature title={domain.title} text={domain.description} icon={<Icon as={domain.icon} w={20} h={20} style={{ 
                          
                       }} />} /> 
                        )
                    })
                }
                </Flex>
                </Box>     
                <Box maxW={'md'} alignItems="center">
                    <Parallax
                    speed={-100} 
                    >
                    <Image src={'/images/domain.svg'} w={'100%'} h={'100%'} />
                    </Parallax>
                </Box>
            </Flex>
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