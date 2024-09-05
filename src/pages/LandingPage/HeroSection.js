import {Image, Button, Heading, Felx, InputRightElement, InputGroup, Input, TabPanels, TabPanel, box, TabList, Tab, Tabs, Text } from '@chakra-ui/react';
import React from "react";
import { Suspense } from 'react';
 

export default function HeroSection() {
    return (
        <>
          {/* hero section */}
          <Box>
            <Box bg="yellow.50" py={{ md: "50px", base: "20px" }}>
                <Flex overfloX="scroll" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                    <Flex
                        gap="40px"
                        w="830px"
                        flex={1}
                        flexDirection="column"
                        alignItems="center"
                        px={{ md: "0px", base: "20px" }}
                        alignSelf={{ md: "auto", base: "stretch" }}
                    >
                        <Flex
                            ml={{ md: "20px", base: "auto" }}
                            gap="14px"
                            w={{ md: "86%", base: "100%" }}
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Heading size="heading5xl" as="h1" letterSpacing="-0.92px" lineHeight="140%">
                                <>
                                Find a perfect property
                                <br />
                                where you&#39;ll love to live
                                </>
                            </Heading>
                            <Text size="textmd" color="gray.700" w="100%" lineHeight="100%">
                                we help you customize your perfect property
                            </Text>
                        </Flex>
                        <Tabs
                            variant="custombackground"
                            as={Flex}
                            ml={{ md: "20px", base: "0px" }}
                            gap="38px"
                            display="flex"
                            bg="white.a700"
                            w={{ md: "86%", base: "100%" }}
                            flexDirection="column"
                            alignItems="center"
                            p={{ base: "20px", sm: "24px" }}
                            borderRadius="16px"
                        >
                            <TabList gap="24px" displays="flex" flexWrap="wrap">
                                <Tab color="gray.700" fontSize="textmd" fontWeight="500" lineHeight="100%" px={{ md: "66px", base: "20px" }} py="12px">
                                    Buy
                                </Tab>
                                <Tab color="gray.700" fontSize="textmd" fontWeight="500" lineHeight="100%" px={{ md: "66px", base: "20px" }} py="12px">
                                    Rent
                                </Tab>
                                <Tab color="gray.700" fontSize="textmd" fontWeight="500" lineHeight="100%" px={{ md: "66px", base: "20px" }} py="12px">
                                    Sell
                                </Tab>
                            </TabList>
                            <TabPanels display="flex">
                                {[...Array(3)].map((_, index) => (
                                    <TabPanel key={'tab-panel${index}'} w="100%" p="0px">
                                        <Box alignSelf="stretch">
                                            <Flex gap="24px" flexDiretion="column">
                                                <Flex gap="20px" flexDirection="column">
                                                    <InputGroup>
                                                        <input
                                                        placeholder={`city/Street`}
                                                        gap="34px"
                                                        borderColor="blue_gray.100.01"
                                                        borderwidth="1px"
                                                        />
                                                        <InputRightElement>
                                                            <Image src="images/img_linkedin.svg" alt="Linkedin.svg" h="20px" mb="4px" />
                                                        </InputRightElement>
                                                    </InputGroup>
                                                    <Flex 
                                                    borderColor="blue_gray.100_01"
                                                    borderWidth="1px"
                                                    borderStyle="solid"
                                                    bg="white.a700"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    gap="20px"
                                                    px="16px"
                                                    py="14px"
                                                    borderRadius="10px"
                                                    >
                                                        <Heading size="headingmd" color="gray.700" lineHeight="100%" fontWeight={600} alignSelf="end">
                                                            Project Type
                                                        </Heading>
                                                        <Image src="images/img_arrow_down.svg" alt="Arrow Down.svg" h="20px" w="20px" />
                                                    </Flex>
                                                    <Flex
                                                        borderColor="blue_gray.100_01"
                                                        borderWidth="1px"
                                                        borderStyle="solid"
                                                        bg="white.a700"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        gap="20px"
                                                        px="16px"
                                                        py="14px"
                                                        borderRadius="10px"
                                                    >
                                                        <Heading size="headingmd" 
                                                        color="gray.700" 
                                                        lineHeight="100%" 
                                                        fontWeight={600} 
                                                        alignSelf="end">
                                                            Price
                                                        </Heading>
                                                        <Image src="images/img_arrow_down.svg" alt="Arrow Down.svg" h="20px" w="20px" />
                                                    </Flex>
                                                </Flex>
                                                <Button size="3x1" fontWeight={700} alignSelf="stretch" borderRadius="10px">
                                                    Search
                                                </Button>
                                            </Flex>
                                        </Box>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </Flex>
                    <Image
                        src="images/img_hero.svg"
                        alt="Main Image.svg"
                        h="502px"
                        w={{ md: "610px", base: "100%" }}
                        fit="cover"
                        />
                 </Flex>
                </Box>
            </Box>
        </>
    );
}
        