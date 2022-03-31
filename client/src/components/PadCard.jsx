import { useState } from 'react';

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';

const PadCard = ({ pad }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Center py={12} >
            <Box
                role={'group'}
                p={6}
                display={'flex'}
                justifyContent={'space-between'}
                maxW={isOpen ? ('330px') : ('800px')}
                w={'full'}
                bg={'gray.700'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                onClick={() => setIsOpen(!isOpen)}
                cursor={'pointer'}
                transition={'all .3s ease'}
            >
                <Box
                    width={isOpen ? ('100%') : ('50%')}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    transition={'all .3s ease'}

                >
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        width={'fit-content'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${pad.images.large[0]})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={pad.images.large[0]}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {pad.name}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            {pad.full_name}
                        </Heading>
                    </Stack>
                </Box>
                {isOpen ? null : (
                    <Box
                        width={'50%'}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Stack direction={'column'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                Technical datas
                            </Text>
                            <Text fontWeight={400} fontSize={'md'}>
                                {pad.details}
                            </Text>
                            <Text fontWeight={200} fontSize={'sm'} color={(pad.launch_attempts / pad.launch_successes) < 0.5 ? ('red.400') : 'green.400'}>
                                Launch attemps : {pad.launch_attempts} <br />
                                Launch successes : {pad.launch_successes}
                            </Text>
                        </Stack>
                        <Button colorScheme='blue' >Book this pad</Button>
                    </Box>
                )}
            </Box>
        </Center >
    );
}

export default PadCard;