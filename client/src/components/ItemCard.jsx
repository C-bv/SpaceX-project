import { useState } from 'react';

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

const ItemCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Center py={12} >
            <Box
                role={'group'}
                p={6}
                maxW={isOpen ? ('330px') : ('75%')}
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
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${item.flickr_images[0]})`,
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
                        src={item.flickr_images[0]}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {item.type}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {item.name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {item.cost_per_launch} $
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center >

    );
}

export default ItemCard;