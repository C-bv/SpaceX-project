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

const RocketCard = ({ rocket }) => {
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
                            backgroundImage: `url(${rocket.flickr_images[0]})`,
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
                            src={rocket.flickr_images[0]}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {rocket.type}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            {rocket.name}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                {rocket.cost_per_launch} $
                            </Text>
                        </Stack>
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
                                Height : {rocket.height.meters} meters <br />
                                Diameter : {rocket.diameter.meters} meters <br />
                                Mass : {rocket.mass.kg} kgs <br />
                                Engine(s) : {rocket.engines.layout} {rocket.engines.type} {rocket.engines.version} <br />
                            </Text>
                            <Text fontWeight={200} fontSize={'sm'} color={rocket.success_rate_pct < 50 ? ('red.400') : 'green.400'}>
                                Success rate : {rocket.success_rate_pct} %
                            </Text>
                        </Stack>
                        <Button
                            colorScheme='blue'
                            // onClick={ }
                        >Book this rocket</Button>
                    </Box>
                )}
            </Box>
        </Center >

    );
}

export default RocketCard;