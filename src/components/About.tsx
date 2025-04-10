import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaCode, FaRocket } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
  delay: number;
}

const Feature = ({ title, text, icon, delay }: FeatureProps) => {
  return (
    <AnimatedSection delay={delay}>
      <Stack align={"center"} textAlign={"center"}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"brand.500"}
            rounded={"full"}
            bg={"brand.50"}
            mb={1}
          >
            <Icon as={icon} w={10} h={10} />
          </Flex>
        </motion.div>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    </AnimatedSection>
  );
};

export default function About() {
  return (
    <Box id="about" py={20}>
      <Container maxW={"7xl"}>
        <AnimatedSection>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={16}
          >
            <Heading fontSize={"3xl"}>About Me</Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              I'm a passionate ReactJS Developer with a strong foundation in web
              development
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          maxW={"3xl"}
          mx={"auto"}
        >
          <Feature
            icon={FaLightbulb}
            title={"Problem Solver"}
            text={
              "I enjoy tackling complex challenges and finding innovative solutions"
            }
            delay={0.2}
          />
          <Feature
            icon={FaUsers}
            title={"Team Player"}
            text={
              "I thrive in collaborative environments and value effective communication"
            }
            delay={0.3}
          />
          <Feature
            icon={FaCode}
            title={"Clean Code"}
            text={"I write maintainable, efficient, and well-documented code"}
            delay={0.4}
          />
          <Feature
            icon={FaRocket}
            title={"Fast Learner"}
            text={
              "I quickly adapt to new technologies and industry best practices"
            }
            delay={0.5}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
