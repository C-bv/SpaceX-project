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

const DragonCard = ({ dragon }) => {
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
                            backgroundImage: `url(${dragon.flickr_images[0]})`,
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
                            src={dragon.flickr_images[0]}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {dragon.type}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            {dragon.name}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={400} fontSize={'md'} maxHeight={'200px'} overflowY={'auto'}>
                                Capacity : {dragon.crew_capacity} people
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
                                Height : {dragon.height_w_trunk.meters} meters <br />
                                Diameter : {dragon.diameter.meters} meters <br />
                                Mass : {dragon.dry_mass_kg} kgs <br />
                                Heat shield material : {dragon.heat_shield.material} <br />
                            </Text>
                            <Text fontWeight={200} fontSize={'sm'}>
                                {dragon.description}
                            </Text>
                        </Stack>
                        <Button colorScheme='blue' >Book this dragon</Button>
                    </Box>
                )}
            </Box>
        </Center >

    );
}

export default DragonCard;