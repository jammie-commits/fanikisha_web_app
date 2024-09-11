import UserProfile from "../../components/UserProfile";
import { Box, Flex, Heading, Text, Image, Container, SimpleGrid, Button } from "@chakra-ui/react";
import React, { Suspense } from "react";

// Corrected typo in the array name
const searchOptionGrid = [
    {
        userImage: "image/img_user_1.png",
        userLocationText: (
            <>
                Search <br />
                your location
            </>
        ),
    },
    {
        userImage: "image/img_user_2.png",
        userLocationText: (
            <>
                Visit <br />
                appointment
            </>
        ),
    },
    {
        userImage: "image/img_user_3.png",
        userLocationText: (
            <>
                Get your <br />
                dream house
            </>
        ),
    },
    {
        userImage: "image/img_user_4.png",
        userLocationText: (
            <>
                Enjoy <br />
                appointment
            </>
        ),
    },
];

export default function FeaturesOverview() {
    return (
        <>
            {/* features overview section */}
            <Flex justifyContent="center">
                <Container
                    gap="24px"
                    display="flex"
                    justifyContent="center"  // Corrected typo here
                    px={{ md: "0px", base: "20px" }}
                    flexDirection={{ md: "row", base: "column" }}
                >
                    <Flex
                        gap="24px"
                        bg="red.100"
                        w="100%"
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="center"
                        py={{ md: "72px", base: "20px" }}
                        px={{ md: "50px", base: "20px" }}
                        borderRadius="10px"
                    >
                        <Flex gap="14px" alignSelf="stretch" flexDirection="column">
                            <Heading size="heading4x1" letterSpacing="-0.72px" lineHeight="140%">
                                Simple & easy way to find your dream appointment
                            </Heading>
                            <Text color="gray.900" lineHeight="180%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </Flex>
                        <Button fontWeight={600} minW="138px" borderRadius="10px">
                            Get Started
                        </Button>
                    </Flex>
                    <SimpleGrid ml={{ md: "24px", base: "0px" }} w="100%" gap="24px" columns={{ md: 2, base: 1 }}>
                        <Suspense fallback={<div>Loading...</div>}>
                            {searchOptionGrid.map((item, index) => (
                                <UserProfile {...item} key={"processGrid" + index} />  
                            ))}
                        </Suspense>
                    </SimpleGrid>
                </Container>
            </Flex>
        </>
    );
}
