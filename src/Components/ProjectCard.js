import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Highlight,
} from "@chakra-ui/react";

function ProjectCard({ title, desc, image, alt, link }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Card
      zIndex={isHovering ? "1" : "0"}
      boxShadow={isHovering ? "dark-lg" : "none"}
      rounded="md"
      direction="row"
      overflow="hidden"
      style={{
        position: "relative",
        top: isHovering ? "-5px" : "0",
        transition: "top ease 0.1s",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => window.open(link, "_blank")}
    >
      <Image objectFit="contain" maxW="60%" minW="40%" src={image} alt={alt} />
      <Stack>
        <CardBody>
          <Heading>
            <Highlight
              query={title}
              styles={{ px: "2", py: "1", bg: "yellow" }}
            >
              {title}
            </Highlight>
          </Heading>
          <Text py={5}>{desc}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default ProjectCard;
