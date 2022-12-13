import { Flex, Center, Stack, Text, Highlight } from "@chakra-ui/react";

function About() {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center m={5}>
        <Stack spacing={10} align={"left"}>
          <Text fontSize="5xl">
            <Highlight
              query="ColdFish777"
              styles={{ px: "2", py: "1", bg: "yellow" }}
            >
              My name is ColdFish777, nice to meet you.
            </Highlight>
          </Text>
          <Text fontSize="3xl">
            <Highlight
              query="UI/UX"
              styles={{ px: "2", py: "1", bg: "yellow" }}
            >
              I am currently taking UI/UX at Brown.
            </Highlight>
          </Text>
        </Stack>
      </Center>
    </Flex>
  );
}

export default About;
