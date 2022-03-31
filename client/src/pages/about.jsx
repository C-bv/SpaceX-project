import { useState, useEffect } from "react";

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    StackDivider,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';

export default function About() {
    const [aboutData, setAboutData] = useState();

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/company")
            .then(res => res.json())
            .then(data => setAboutData(data))
    }, [])

    const color = useColorModeValue('blue.50', 'blue.900');

    return (
        <>
            {(typeof aboutData === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                <Container maxW={'5xl'} py={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Stack spacing={4}>
                            <Heading>About SpaceX</Heading>
                            <Text color={'gray.500'} fontSize={'lg'}>
                                {aboutData.summary}
                            </Text>
                            <Flex
                                justify={'space-between'}
                            >
                                <Stack
                                    spacing={4}
                                    width={'50%'}
                                    divider={
                                        <StackDivider
                                            borderColor={'gray.700'}
                                        />
                                    }>
                                    <Text fontWeight={600}>CEO : {aboutData.founder}</Text>
                                    <Text fontWeight={600}>Founded in : {aboutData.founded}</Text>
                                    <Text fontWeight={600}>Employees : {aboutData.employees}</Text>
                                </Stack>
                                <Stack
                                    spacing={4}
                                    width={'50%'}
                                    divider={
                                        <StackDivider
                                            borderColor={'gray.700'}
                                        />
                                    }>
                                    <Text fontWeight={600}>Launch sites : {aboutData.launch_sites}</Text>
                                    <Text fontWeight={600}>Test sites : {aboutData.test_sites}</Text>
                                    <Text fontWeight={600}>Vehicles : {aboutData.vehicles}</Text>
                                </Stack>
                            </Flex>
                        </Stack>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'feature image'}
                                src={
                                    'https://cdn.vox-cdn.com/thumbor/GC8amOwT7u9_zSmonE5oB_sgWys=/0x0:3100x2068/1200x800/filters:focal(1302x786:1798x1282)/cdn.vox-cdn.com/uploads/chorus_image/image/67310362/1227902590.jpg.0.jpg'
                                }
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
            )}
        </>
    )
}



/* <div className="about">About the compagny</div>
{
    (typeof aboutData === 'undefined') ? (
        <p>Loading...</p>
    ) : (
    <div>
        <h1>The compagny</h1>
        <h2>{aboutData.name}</h2>
        <p>{aboutData.summary}</p>
        <p>CEO : {aboutData.founder}</p>
        <h3>{aboutData.name} in numbers</h3>
        <p>Founded in : {aboutData.founded}</p>
        <p>Employees : {aboutData.employees}</p>
        <p>Valuation : {aboutData.valuation} $</p>
        <p>Launch sites : {aboutData.launch_sites}</p>
        <p>Test sites : {aboutData.test_sites}</p>
        <p>Vehicles : {aboutData.vehicles}</p>
    </div>
)
}
        </>
    ); */