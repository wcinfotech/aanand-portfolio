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
      <Stack spacing={{ base: 4, md: 6 }} height="full">
        <Stack spacing={3} flex={1}>
          <Heading 
            color={"gray.700"} 
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }} 
            fontFamily={"body"}
            lineHeight={1.2}
          >
            {title}
          </Heading>
          <Text 
            color={"gray.500"} 
            _dark={{ color: "gray.400" }}
            fontSize={{ base: "sm", md: "md" }}
            lineHeight={1.5}
          >
            {description}
          </Text>
        </Stack>
        
        <Stack spacing={4}>
          <Stack 
            direction={{ base: "column", sm: "row" }} 
            spacing={{ base: 2, sm: 1 }}
            flexWrap="wrap" 
            gap={2}
          >
            {technologies.map((tech) => (
              <MotionBadge
                key={tech}
                px={{ base: 2, md: 3 }}
                py={1}
                bg={"brand.50"}
                fontWeight={"400"}
                fontSize={{ base: "xs", md: "sm" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                alignSelf={{ base: "flex-start", sm: "auto" }}
              >
                {tech}
              </MotionBadge>
            ))}
          </Stack>
          
          {(githubLink || liveLink) && (
            <Stack 
              direction={"row"} 
              spacing={{ base: 4, md: 6 }}
              justify={{ base: "center", sm: "flex-start" }}
            >
              {githubLink && (
                <Link href={githubLink} isExternal>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      as={FaGithub} 
                      w={{ base: 5, md: 6 }} 
                      h={{ base: 5, md: 6 }} 
                      color="gray.600"
                      _hover={{ color: "brand.500" }}
                    />
                  </motion.div>
                </Link>
              )}
              {liveLink && (
                <Link href={liveLink} isExternal>
                  <motion.div
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      as={FaExternalLinkAlt} 
                      w={{ base: 5, md: 6 }} 
                      h={{ base: 5, md: 6 }}
                      color="gray.600"
                      _hover={{ color: "brand.500" }}
                    />
                  </motion.div>
                </Link>
              )}
            </Stack>
          )}
        </Stack>
      </Stack>
    </AnimatedCard>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Matelomobile (Freelance)",
      description:
        "Developed a responsive e-commerce UI using React.js with reusable components and dynamic data handling.",
      technologies: ["React.js", "JavaScript", "CSS"],
    },
    {
      title: "Dignity Academy (Freelance)",
      description:
        "Created a responsive educational website using HTML, CSS, and JavaScript, focused on layout consistency and clear design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://dignityacademy7.in/",
    },
    {
      title: "Sports Management System",
      description:
        "Built a React.js dashboard for managing players, teams, and scheduling with modular components.",
      technologies: ["React.js", "JavaScript"],
    },
    {
      title: "WC Chat App",
      description:
        "Designed a real-time chat application using Java and Android SDK, featuring secure messaging and local storage.",
      technologies: ["Java", "Android SDK"],
    },
    {
      title: "Grocery Shopping Mart (MERN Stack)",
      description:
        "Built a full-stack grocery web app using MongoDB, Express.js, React.js, and Node.js with user-friendly UI and product management features.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
  ];

  return (
    <Box id="projects" py={{ base: 16, md: 20 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Container maxW={"7xl"} px={{ base: 4, md: 6 }}>
        <AnimatedSection direction="up">
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={{ base: 12, md: 16 }}
            px={{ base: 4, md: 0 }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Projects
            </Heading>
            <Text
              color={"gray.600"}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              _dark={{ color: "gray.400" }}
              maxW={{ base: "full", md: "2xl" }}
              mx="auto"
            >
              Here are some of the projects I've worked on
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid 
          columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }} 
          spacing={{ base: 6, md: 8, lg: 10 }}
          maxW="full"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
