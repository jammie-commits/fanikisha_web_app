import LandingPageCard from "../../components/LandingPageCard";
import { Box, SimpleGrid, Heading, Flex, Image, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default function FeaturedProperties() {
    return (
        <>
            {/* featured properties section */}
            <Flex flexDirection="column" alignItems="center">
                <Container
                    gap={{ base: "26px", sm: "52px" }}
                    display="flex"
                    flexDirection="column"
                    px={{ md: "0px", base: "20px" }}
                >
                    <Flex gap="22px" flexDirection="column">
                        <Flex justifyContent="center" alignItems="flex-end" flexDirection={{ base: "column", sm: "row" }}>
                            <Heading size="heading2xl" as="h2" letterSpacing="-0.92px" lineHeight="100%">
                                Featured Properties
                            </Heading>
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                                <Flex mb="8px" gap="8px" flex={1} alignSelf={{ base: "stretch", sm: "flex-end" }}>
                                    <Heading size="headingmd" as="h3" color="orange.a700">
                                        Explore all
                                    </Heading>
                                    <Image src="image/img_arrow_left.svg" alt="arrow left" h="24px" w="24px" />
                                </Flex>
                            </a>
                        </Flex>
                        {/* Property Types Section */}
                        <Flex justifyContent="space-between" flexWrap="wrap" gap="20px">
                            <Heading size="headingmd" as="h4">
                                Residential Property
                            </Heading>
                            <Heading size="headingmd" as="h5" color="gray.500">
                                Commercial Property
                            </Heading>
                            <Heading size="headingmd" as="h6" color="gray.500">
                                Industrial Property
                            </Heading>
                            <Heading size="headingmd" as="h6" color="gray.500">
                                Agricultural Property
                            </Heading>
                        </Flex>
                    </Flex>
                    {/* Featured Properties Grid */}
                    <SimpleGrid gap="24px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
                        <Suspense fallback={<Box>Loading feed...</Box>}>
                            {[...Array(6)].map((_, index) => (
                                <LandingPageCard key={"featured" + index} />
                            ))}
                        </Suspense>
                    </SimpleGrid>
                </Container>
            </Flex>
        </>
    );
}
