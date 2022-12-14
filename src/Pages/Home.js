import { Box, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <Box>
      <Text fontSize="9xl" position="absolute" top="30vh" left="10vw" as="mark">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[300, "Hello,", 1000]}
          speed={1} // Custom Speed from 1-99 - Default Speed: 40
          cursor={false} // Hide Cursor - Default: true
        />
      </Text>

      <Text fontSize="5xl" position="absolute" top="60vh" left="10vw">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            2000,
            "I design unique experiences.",
            2000,
            "I build intuitive interfaces.",
            2000,
            "I engineer innovative software.",
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      </Text>
    </Box>
  );
}

export default Home;
