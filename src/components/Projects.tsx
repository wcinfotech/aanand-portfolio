import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Badge,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  index: number;
}

const MotionBadge = motion(Badge);

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  index,
}: ProjectCardProps) => {
  return (
    <AnimatedCard delay={0.1 * index}>
      <Stack>
        <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Text color={"gray.500"} _dark={{ color: "gray.400" }}>
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Stack direction={"row"} spacing={1} flexWrap="wrap" gap={2}>
          {technologies.map((tech) => (
            <MotionBadge
              key={tech}
              px={2}
              py={1}
              bg={"brand.50"}
              fontWeight={"400"}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </MotionBadge>
          ))}
        </Stack>
      </Stack>
      {(githubLink || liveLink) && (
        <Stack mt={4} direction={"row"} spacing={4}>
          {githubLink && (
            <Link href={githubLink} isExternal>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaGithub} w={5} h={5} />
              </motion.div>
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} isExternal>
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaExternalLinkAlt} w={5} h={5} />
              </motion.div>
            </Link>
          )}
        </Stack>
      )}
    </AnimatedCard>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "WC Chat",
      description:
        "A chat application developed using Android and Java, enabling real-time communication between users.",
      technologies: ["Android", "Java"],
    },
    {
      title: "Matchmobile (Freelancing Project)",
      description:
        "A freelancing project built with React.js for mobile device matching and comparison.",
      technologies: ["React.js"],
    },
    {
      title: "Sports Management System",
      description:
        "A comprehensive sports management system developed using React.js for tracking and organizing sports events.",
      technologies: ["React.js"],
    },
    {
      title: "Grocery Shopping Mart",
      description:
        "An e-commerce platform for grocery shopping built with HTML, CSS, JavaScript, and Bootstrap.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: "Wireless Hand Gesture Control Robot",
      description:
        "A hardware-based project using Arduino for controlling a robot through hand gestures.",
      technologies: ["Arduino", "Hardware"],
    },
    {
      title: "Dignity Academy",
      description:
        "A freelancing project for an educational platform built with HTML, CSS, JavaScript, and Bootstrap.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveLink: "https://dignityacademy7.in/",
    },
  ];

  return (
    <Box id="projects" py={20} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Container maxW={"7xl"}>
        <AnimatedSection direction="up">
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={16}
          >
            <Heading fontSize={"3xl"}>Projects</Heading>
            <Text
              color={"gray.600"}
              fontSize={"xl"}
              _dark={{ color: "gray.400" }}
            >
              Here are some of the projects I've worked on
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
