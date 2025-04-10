import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AnimatedSection from "./AnimatedSection";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box id="home" bg={bg} pt={32} pb={20} position="relative">
      <AnimatedBackground />
      <Container maxW={"3xl"} position="relative" zIndex={1}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <AnimatedSection>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Hi, I'm{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ display: "inline-block" }}
              >
                Aanand Palan
              </motion.span>{" "}
              <br />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Text as={"span"} color={"brand.500"}>
                  ReactJS Developer
                </Text>
              </motion.div>
            </Heading>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Text color={textColor} fontSize={{ base: "lg", md: "xl" }}>
              A driven and results-oriented developer with a strong interest in
              web development. Experienced in React.js, JavaScript, and modern
              web technologies. Looking to contribute my skills in a
              collaborative environment.
            </Text>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <Stack
              direction={"row"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    colorScheme={"brand"}
                    bg={"brand.400"}
                    rounded={"full"}
                    px={6}
                    _hover={{
                      bg: "brand.500",
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button rounded={"full"} px={6} variant="outline">
                    View Projects
                  </Button>
                </motion.div>
              </Link>
            </Stack>
          </AnimatedSection>
        </Stack>
      </Container>
    </Box>
  );
}
