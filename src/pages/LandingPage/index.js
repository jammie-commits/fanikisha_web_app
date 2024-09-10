import { Helmet } from "react-helmet";
import UserProfile2 from "../../components/UserProfile2";
import FeaturedProperties from "./FeaturedProperties";
import FeaturesOverview from "./FeaturesOverview";
import CallToAction from "./CallToAction";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSlider from "./TestimonialsSlider";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import Header from "../../components/Header";
import { Box, Button, Input, Flex, Text, Heading, Image, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default function LandingPage() {
    const blogPostsList = []; // Placeholder for blog posts data

    return (
        <>
            <Helmet>
                <title>Find your dream Property - Explore listings</title>
                <meta
                    name="description"
                    content="Discover your perfect property with our listings. Explore our listings and find your dream property."
                />
            </Helmet>

            {/* landing page section */}
            <Flex gap={{ md: "98px", base: "49px", sm: "73px" }} bg="white.a700" w="100%" flexDirection="column">

                {/* main navigation section */}
                <Box>
                    {/* header section */}
                    <Box>
                        <Header />
                    </Box>

                    {/* hero section */}
                    <HeroSection />
                </Box>

                {/* features overview section */}
                <FeaturesOverview />

                {/* statistics section */}
                <StatisticsSection />

                {/* featured properties section */}
                <FeaturedProperties />

                {/* call to action section */}
                <CallToAction />

                {/* testimonials section */}
                <TestimonialsSlider />

                {/* latest news section */}
                <Flex bg="gray.900" justifyContent="center" py={{ md: "120px", base: "20px" }}>
                    <Container display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
                        <Flex gap={{ md: "118px", base: "59px", sm: "88px" }} w="100%" flexDirection="column">
                            <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column">
                                <Flex justifyContent="center" alignItems="center" flexDirection={{ base: "column", sm: "row" }}>
                                    <Heading size="heading4x1" color="white.a700" letterSpacing="-0.72px">
                                        Latest News
                                    </Heading>
                                    <a href="https://www.realtor.com/realestateandhomes-search" target="_blank">
                                        <Flex
                                            mb="8px"
                                            gap="8px"
                                            alignSelf={{ base: "stretch", sm: "end" }}
                                            flex={1}
                                            justifyContent="flex-end"
                                        >
                                            <Heading size="headingmd" as="h3" color="white.a700">
                                                Explore listings
                                            </Heading>
                                            <Image src="images/img_arrow_left.svg" alt="Arrow Image" h="24px" w="24px" />
                                        </Flex>
                                    </a>
                                </Flex>

                                {/* Blog posts */}
                                <Flex gap="24px" flexDirection={{ md: "row", base: "column" }}>
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {blogPostsList.map((d, index) => (
                                            <UserProfile2 {...d} key={"bloglist" + index} />
                                        ))}
                                    </Suspense>
                                </Flex>
                            </Flex>

                            {/* Newsletter subscription */}
                            <Box>
                                <Flex
                                    gap="30px"
                                    flexDirection="column"
                                    alignItems="center"
                                    p={{ base: "20px", sm: "40px" }}
                                    borderRadius="10px"
                                >
                                    <Flex
                                        gap="4px"
                                        w={{ md: "54%", base: "100%" }}
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Heading
                                            size="heading3x1"
                                            as="h1"
                                            letterSpacing="-0.56px"
                                            fontSize={{ md: "28px", base: "24px", sm: "26px" }}
                                        >
                                            For Recent Update, News.
                                        </Heading>
                                        <Text color="gray.900" textAlign="center" alignSelf="stretch" lineHeight="100%">
                                            Subscribe to our newsletter to stay up to date with our latest news
                                        </Text>
                                    </Flex>
                                    <Flex
                                        gap="8px"
                                        w={{ md: "54%", base: "100%" }}
                                        justifyContent="center"
                                    >
                                        <Input
                                            size="xs"
                                            colorScheme="gray_50_02"
                                            placeholder={"Enter your email"}
                                            type="email"
                                            flexGrow={1}
                                        />
                                        <Button fontWeight={600} minW="126px" borderRadius="10px">
                                            Subscribe
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Flex>

                {/* footer section */}
                <Footer />
            </Flex>
        </>
    );
}
