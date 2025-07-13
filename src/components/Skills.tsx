import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaAndroid,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPhp, SiMongodb } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
  index: number;
}

const MotionFlex = motion(Flex);

const Feature = ({ title, text, icon, index }: FeatureProps) => {
  return (
    <AnimatedCard delay={0.1 * index}>
      <Stack align={"center"} textAlign={"center"}>
        <MotionFlex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"brand.500"}
          rounded={"full"}
          bg={"brand.50"}
          mb={1}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Icon as={icon} w={10} h={10} />
        </MotionFlex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"} _dark={{ color: "gray.400" }}>
          {text}
        </Text>
      </Stack>
    </AnimatedCard>
  );
};

export default function Skills() {
  const skills = [
    {
      icon: FaReact,
      title: "React.js",
      text: "Modern web development with React and its ecosystem",
    },
    {
      icon: FaHtml5,
      title: "HTML5",
      text: "Semantic markup and modern HTML features",
    },
    {
      icon: FaCss3Alt,
      title: "CSS3",
      text: "Modern styling and responsive design",
    },
    {
      icon: FaJs,
      title: "JavaScript",
      text: "ES6+ features and modern JavaScript development",
    },
    {
      icon: FaBootstrap,
      title: "Bootstrap",
      text: "Responsive framework for rapid development",
    },
    {
      icon: SiPhp,
      title: "PHP",
      text: "Server-side web development",
    },
    {
      icon: FaDatabase,
      title: "MySQL",
      text: "Database design and management",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      text: "NoSQL database for modern applications",
    },
    {
      icon: FaJava,
      title: "Java",
      text: "Object-oriented programming and Android development",
    },
    {
      icon: FaAndroid,
      title: "Android SDK",
      text: "Native Android app development",
    },
    {
      icon: FaGitAlt,
      title: "Git",
      text: "Version control and collaboration",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      text: "Code hosting and project management",
    },
  ];

  return (
    <Box id="skills" py={20}>
      <Container maxW={"7xl"}>
        <AnimatedSection direction="up">
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={16}
          >
            <Heading fontSize={"3xl"}>Skills & Technologies</Heading>
            <Text
              color={"gray.600"}
              fontSize={"xl"}
              _dark={{ color: "gray.400" }}
            >
              My technical skills and the technologies I work with
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
          {skills.map((skill, index) => (
            <Feature key={index} index={index} {...skill} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
