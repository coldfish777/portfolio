import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Breadcrumb
        position="absolute"
        zIndex="1"
        m={7}
        separator="|"
        fontWeight="medium"
        fontSize="1xl"
      >
        <BreadcrumbItem as={Link} to="/portfolio/home">
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/portfolio/projects">
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/portfolio/about">
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        position="absolute"
        right={3}
        m={4}
        fontSize="1xl"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
}

export default Header;
