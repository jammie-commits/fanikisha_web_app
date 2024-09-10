import { Button, Checkbox, Flex, Heading, Input, Text, Image, Container, Box, Center } from "@chakra-ui/react";
import React from "react";

export default function CallToAction() {
    return (
        <>
            {/* call to action section */}
            <Box>
                <Center bg="gray.50" flexDirection="column" py={{ md: "120px", base: "20px" }}>
                    <Container px={{ md: "0px", base: "20px" }}>
                        <Flex gap={{ md: "150px", base: "75px", sm: "112px" }} flexDirection="column">
                            <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                                <Flex gap={{ base: "29px", sm: "58px" }} w="100%" flexDirection="column" alignItems="start">
                                    <Flex gap="18px" alignSelf="stretch" flexDirection="column" alignItems="start">
                                        <Heading
                                            size="heading4xl"
                                            as="h1"
                                            letterSpacing="-0.72px"
                                            w={{ md: "92%", base: "100%" }}
                                            lineHeight="140%"
                                        >
                                            Find your perfect property
                                        </Heading>
                                        <Text color="gray.700" w={{ md: "92%", base: "100%" }} lineHeight="180%">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Text>
                                    </Flex>
                                    <Button fontWeight={600} minW="138px" borderRadius="10px">
                                        Get Started
                                    </Button>
                                </Flex>
                                <Flex gap="10px" w="100%" flexDirection={{ base: "column", sm: "row" }}>
                                    <Flex
                                        gap="16px"
                                        flex={1}
                                        flexDirection="column"
                                        alignItems="end"
                                        alignSelf={{ base: "stretch", sm: "auto" }}
                                    >
                                        <Image
                                            src="image/img_rectangle_18.png"
                                            alt="image two"
                                            h="326px"
                                            w="86%"
                                            fit="contain"
                                            borderRadius="10px"
                                        />
                                        <Image
                                            src="image/img_rectangle_18.png"
                                            alt="image three"
                                            h="326px"
                                            w="86%"
                                            fit="contain"
                                            borderRadius="10px"
                                        />
                                    </Flex>
                                    <Flex gap="16px" w={{ base: "100%", sm: "46%" }} flexDirection="column">
                                        <Image
                                            src="image/img_rectangle_18.png"
                                            alt="image five"
                                            h="326px"
                                            ml={{ md: "10px", base: "0px" }}
                                            fit="cover"
                                            borderRadius="10px"
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                gap="20px"
                                flexDirection={{ md: "row", base: "column" }}
                            >
                                <Image
                                    src="image/img_rectangle_18.png"
                                    alt="image six"
                                    h="588px"
                                    ml={{ md: "42px", base: "0px" }}
                                    fit="contain"
                                    borderRadius="10px"
                                />
                                <Flex
                                    gap={{ base: "30px", sm: "60px" }}
                                    w={{ md: "42%", base: "100%" }}
                                    flexDirection="column"
                                    alignItems="start"
                                >
                                    <Flex gap="18px" alignSelf="stretch" flexDirection="column">
                                        <Flex gap="18px" flexDirection="column">
                                            <Heading size="heading2xl" as="h3" letterSpacing="-0.72px" lineHeight="140%">
                                                Best popular rental sites
                                            </Heading>
                                            <Text color="gray.700" lineHeight="180%">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                        </Flex>
                                        <Flex gap="16px" flexDirection="column" alignItems="start" justifyContent="center">
                                            <Checkbox value="true" color="gray.900" fontSize="18px" fontWeight={600} gap="14px">
                                                Find excellent deals
                                            </Checkbox>
                                            <Checkbox value="true" color="gray.900" fontSize="18px" fontWeight={600} gap="14px">
                                                Friendly host & fast support
                                            </Checkbox>
                                            <Checkbox value="true" color="gray.900" fontSize="18px" fontWeight={600} gap="14px">
                                                Secure payment system
                                            </Checkbox>
                                        </Flex>
                                    </Flex>
                                    <Button fontWeight={600} minW="138px" borderRadius="10px">
                                        Learn More
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Container>
                </Center>
            </Box>
        </>
    );
}
