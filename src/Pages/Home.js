import { Flex, Center, Stack, Text, Highlight } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center m={5}>
        <Stack spacing={10} align={"left"}>
          <Text fontSize="7xl">
            <Highlight
              query="Hello,"
              styles={{ px: "2", py: "1", bg: "yellow" }}
            >
              Hello,
            </Highlight>
          </Text>
          <Text fontSize="4xl">
            <Highlight
              query={["web", "intuitive"]}
              styles={{ px: "2", py: "1", bg: "yellow" }}
            >
              I am a web developer focused on intuitive design.
            </Highlight>
          </Text>
        </Stack>
      </Center>
    </Flex>
  );
}

export default Home;
