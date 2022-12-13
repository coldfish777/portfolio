import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <SimpleGrid
      columns={{ md: 1, lg: 2 }}
      spacing="3vh 3vw"
      w="100vw"
      h="100vh"
      maxChildHeight="50%"
      p="10vh 10vw"
      pt="15vh"
    >
      <ProjectCard
        title="Personas"
        desc="I explored user personas and storyboarding to create a better printer user experience for students."
        image={require("../Assets/1personas.jpg")}
        alt="Sketch of Printer"
        link="https://coldfish777.github.io/personas/"
      />
      <ProjectCard
        title="Redesign"
        desc="I redesigned and rebuilt a website to responsively restructure its content based on the user's device, with a focus on accessibility."
        image={require("../Assets/2redesign.png")}
        alt="Style Guide"
        link="https://coldfish777.github.io/redesign/"
      />
      <ProjectCard
        title="Iterative"
        desc="I designed a new desktop user interface for the startup Homeroom, with iterative improvements using feedback from both industry professionals and user testing."
        image={require("../Assets/3iterative.png")}
        alt="Homeroom App Home Page"
        link="https://coldfish777.github.io/iterative/"
      />
      <ProjectCard
        title="Development"
        desc="I built an online store using React, with custom implementations of filtering, sorting, and shopping cart."
        image={require("../Assets/4dev.png")}
        alt="Online Shop Home Page"
        link="https://coldfish777.github.io/development/"
      />
    </SimpleGrid>
  );
}

export default Projects;
