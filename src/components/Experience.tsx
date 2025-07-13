import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Circle,
  UnorderedList,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import AnimatedSection from "./AnimatedSection";

interface ExperienceItemProps {
  period: string;
  position: string;
  company: string;
  location: string;
  type: string;
  responsibilities: string[];
  isLast?: boolean;
}

const ExperienceItem = ({
  period,
  position,
  company,
  location,
  type,
  responsibilities,
  isLast = false,
}: ExperienceItemProps) => {
  return (
    <HStack spacing={4} align="start">
      <VStack spacing={0} align="center" minW="120px">
        <Circle size="16px" bg="brand.500" />
        {!isLast && <Box w="2px" h="100%" bg="gray.200" />}
      </VStack>
      <VStack align="start" spacing={3} pb={8} flex={1}>
        <HStack spacing={2} wrap="wrap">
          <Text color="brand.500" fontSize="sm" fontWeight="bold">
            {period}
          </Text>
          <Badge colorScheme="green" size="sm">
            {type}
          </Badge>
        </HStack>
        <Heading size="md" fontWeight="bold">
          {position}
        </Heading>
        <Text color="gray.600" fontWeight="medium">
          {company} • {location}
        </Text>
        <UnorderedList spacing={2} pl={4}>
          {responsibilities.map((responsibility, index) => (
            <ListItem key={index} color="gray.600">
              {responsibility}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </HStack>
  );
};

export default function Experience() {
  const experienceData = [
    {
      period: "Jan 2025 - July 2025",
      position: "Frontend Developer",
      company: "Tecnología Mexicana Cluster ITMX",
      location: "Remote",
      type: "Remote",
      responsibilities: [
        "Contributed to USICAMM, a national education platform under the Government of Mexico (SEP)",
        "Developed responsive and accessible UI using React.js, HTML, CSS, and JavaScript",
        "Delivered performance-optimized modules for large-scale users across Mexico",
        "Collaborated with backend and UI/UX teams for seamless integration",
        "Received an official Letter of Recommendation for high-quality work",
      ],
    },
  ];

  return (
    <Box id="experience" py={20}>
      <Container maxW={"7xl"}>
        <AnimatedSection>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={16}
          >
            <Heading fontSize={"3xl"}>Professional Experience</Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              My professional journey and key accomplishments
            </Text>
          </Stack>
        </AnimatedSection>

        <Stack spacing={0} maxW={"4xl"} mx={"auto"}>
          {experienceData.map((item, index) => (
            <AnimatedSection key={index} delay={0.2 * index}>
              <ExperienceItem
                {...item}
                isLast={index === experienceData.length - 1}
              />
            </AnimatedSection>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
