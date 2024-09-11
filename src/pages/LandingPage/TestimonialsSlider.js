import { Slider } from "../../components"; // Correct the path if needed
import { IconButton, Image, Flex, Heading, Box, Container } from "@chakra-ui/react";
import React from "react";

export default function TestimonialsSlider() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <>
            {/* testimonials section */}
            <Flex flexDirection="column" alignItems="center">
                <Container
                    gap="24px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    px={{ md: "56px", base: "20px" }}
                >
                    <Box w={{ md: "92%", base: "100%" }} display="flex" mx="auto" flexDirection={{ md: "row", base: "column" }}>
                        <Slider
                            autoplay
                            autoplayInterval={2000}
                            responsive={{
                                0: { items: 1 },
                                551: { items: 2 },
                                1051: { items: 3 } // Complete the items count
                            }}
                            disableDotControls
                            activeIndex={sliderState}
                            onSlideChanged={(e) => {
                                setSliderState(e?.item);
                            }}
                            ref={sliderRef}
                        >
                            {[...Array(6)].map((_, index) => (
                                <React.Fragment key={`testimonial-${index}`}>
                                    <Image
                                        src="images/img_rectangle_5591.png"
                                        alt="Slider Image"
                                        h="344px"
                                        fit="contain"
                                        borderRadius="8px"
                                        w={{ md: "auto", base: "100%" }}
                                    />
                                </React.Fragment>
                            ))}
                        </Slider>
                    </Box>

                    {/* Slider Navigation */}
                    <Flex gap="24px" mt="16px">
                        <IconButton
                            size="xs"
                            icon={<Image src="images/img_arrow_left.svg" />}
                            aria-label="Previous Control"
                            w="110px"
                            onClick={() => {
                                sliderRef.current?.slidePrev();
                            }}
                        />
                        <IconButton
                            size="xs"
                            icon={<Image src="images/img_arrow_right.svg" />}
                            aria-label="Next Control"
                            w="110px"
                            onClick={() => {
                                sliderRef.current?.slideNext();
                            }}
                        />
                    </Flex>
                </Container>
            </Flex>
        </>
    );
}
