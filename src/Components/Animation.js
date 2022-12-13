import { motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./Header";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.4,
};

function Animation() {
  const { pathname } = useLocation();
  return (
    <Box>
      <Header />
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </Box>
  );
}

export default Animation;
