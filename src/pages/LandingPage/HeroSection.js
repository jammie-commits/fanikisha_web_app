import {
    Image,
    Button,
    Heading,
    Flex,
    InputRightElement,
    InputGroup,
    Input,
    TabPanels,
    TabPanel,
    Box,
    TabList,
    Tab,
    Tabs,
    Text,
} from '@chakra-ui/react';
import React from 'react';

export default function HeroSection() {
    return (
        <>
            {/* hero section */}
            <Box>
                <Box bg="yellow.50" py={{ md: '50px', base: '20px' }}>
                    <Flex
                        overflowX="scroll"
                        alignItems="center"
                        flexDirection={{ md: 'row', base: 'column' }}
                    >
                        <Flex
                            gap="40px"
                            w="830px"
                            flex={1}
                            flexDirection="column"
                            alignItems="center"
                            px={{ md: '0px', base: '20px' }}
                            alignSelf={{ md: 'auto', base: 'stretch' }}
                        >
                            <Flex
                                ml={{ md: '20px', base: 'auto' }}
                                gap="14px"
                                w={{ md: '86%', base: '100%' }}
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Heading
                                    size="heading5xl"
                                    as="h1"
                                    letterSpacing="-0.92px"
                                    lineHeight="140%"
                                >
                                    <>
                                        Find a perfect property
                                        <br />
                                        where you'll love to live
                                    </>
                                </Heading>
                                <Text
                                    size="textmd"
                                    color="gray.700"
                                    w="100%"
                                    lineHeight="100%"
                                >
                                    We help you customize your perfect property
                                </Text>
                            </Flex>

                            {/* Tabs section */}
                            <Tabs
                                variant="enclosed"
                                as={Flex}
                                ml={{ md: '20px', base: '0px' }}
                                gap="38px"
                                display="flex"
                                bg="white"
                                w={{ md: '86%', base: '100%' }}
                                flexDirection="column"
                                alignItems="center"
                                p={{ base: '20px', sm: '24px' }}
                                borderRadius="16px"
                            >
                                <TabList gap="24px" display="flex" flexWrap="wrap">
                                    <Tab
                                        color="gray.700"
                                        fontSize="textmd"
                                        fontWeight="500"
                                        lineHeight="100%"
                                        px={{ md: '66px', base: '20px' }}
                                        py="12px"
                                    >
                                        Buy
                                    </Tab>
                                    <Tab
                                        color="gray.700"
                                        fontSize="textmd"
                                        fontWeight="500"
                                        lineHeight="100%"
                                        px={{ md: '66px', base: '20px' }}
                                        py="12px"
                                    >
                                        Rent
                                    </Tab>
                                    <Tab
                                        color="gray.700"
                                        fontSize="textmd"
                                        fontWeight="500"
                                        lineHeight="100%"
                                        px={{ md: '66px', base: '20px' }}
                                        py="12px"
                                    >
                                        Sell
                                    </Tab>
                                </TabList>

                                <TabPanels display="flex">
                                    {/* Tab Panel Mapping */}
                                    {['Buy', 'Rent', 'Sell'].map((label, index) => (
                                        <TabPanel
                                            key={`tab-panel-${index}`}
                                            w="100%"
                                            p="0px"
                                        >
                                            <Box alignSelf="stretch">
                                                <Flex gap="24px" flexDirection="column">
                                                    <Flex gap="20px" flexDirection="column">
                                                        <InputGroup>
                                                            <Input
                                                                placeholder="City/Street"
                                                                borderColor="blue_gray.100.01"
                                                                borderWidth="1px"
                                                            />
                                                            <InputRightElement>
                                                                <Image
                                                                    src="images/img_linkedin.svg"
                                                                    alt="Linkedin"
                                                                    h="20px"
                                                                    mb="4px"
                                                                />
                                                            </InputRightElement>
                                                        </InputGroup>

                                                        <Flex
                                                            borderColor="blue_gray.100_01"
                                                            borderWidth="1px"
                                                            borderStyle="solid"
                                                            bg="white"
                                                            justifyContent="space-between"
                                                            alignItems="center"
                                                            gap="20px"
                                                            px="16px"
                                                            py="14px"
                                                            borderRadius="10px"
                                                        >
                                                            <Heading
                                                                size="headingmd"
                                                                color="gray.700"
                                                                lineHeight="100%"
                                                                fontWeight={600}
                                                                alignSelf="end"
                                                            >
                                                                Project Type
                                                            </Heading>
                                                            <Image
                                                                src="images/img_arrow_down.svg"
                                                                alt="Arrow Down"
                                                                h="20px"
                                                                w="20px"
                                                            />
                                                        </Flex>

                                                        <Flex
                                                            borderColor="blue_gray.100_01"
                                                            borderWidth="1px"
                                                            borderStyle="solid"
                                                            bg="white"
                                                            justifyContent="space-between"
                                                            alignItems="center"
                                                            gap="20px"
                                                            px="16px"
                                                            py="14px"
                                                            borderRadius="10px"
                                                        >
                                                            <Heading
                                                                size="headingmd"
                                                                color="gray.700"
                                                                lineHeight="100%"
                                                                fontWeight={600}
                                                                alignSelf="end"
                                                            >
                                                                Price
                                                            </Heading>
                                                            <Image
                                                                src="images/img_arrow_down.svg"
                                                                alt="Arrow Down"
                                                                h="20px"
                                                                w="20px"
                                                            />
                                                        </Flex>
                                                    </Flex>

                                                    <Button
                                                        size="lg"
                                                        fontWeight={700}
                                                        alignSelf="stretch"
                                                        borderRadius="10px"
                                                    >
                                                        Search
                                                    </Button>
                                                </Flex>
                                            </Box>
                                        </TabPanel>
                                    ))}
                                </TabPanels>
                            </Tabs>
                        </Flex>

                        {/* Main Hero Image */}
                        <Image
                            src="images/img_hero.svg"
                            alt="Main Image"
                            h="502px"
                            w={{ md: '610px', base: '100%' }}
                            fit="cover"
                        />
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
