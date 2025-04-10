import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Circle,
  Divider,
} from "@chakra-ui/react";

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
}

const EducationItem = ({ period, degree, institution }: EducationItemProps) => {
  return (
    <HStack spacing={4} align="start">
      <VStack spacing={0} align="center" minW="100px">
        <Circle size="12px" bg="brand.500" />
        <Box w="2px" flex={1} bg="gray.200" />
      </VStack>
      <VStack align="start" spacing={1} pb={8}>
        <Text color="gray.500" fontSize="sm">
          {period}
        </Text>
        <Heading size="md" fontWeight="bold">
          {degree}
        </Heading>
        <Text color="gray.600">{institution}</Text>
      </VStack>
    </HStack>
  );
};

export default function Education() {
  const educationData = [
    {
      period: "SEP 2023 - 2026",
      degree: "B.Tech in Information Technology",
      institution: "Information Technology",
    },
    {
      period: "OCT 2020 - MAY 2023",
      degree: "Diploma in Information Technology",
      institution: "Information Technology",
    },
    {
      period: "MAY 2019 - MARCH 2020",
      degree: "10th (G.S.E.B)",
      institution: "Secondary Education",
    },
  ];

  const achievements = [
    "Participate in NXP Aim 2024 national level AI & Robotics Competition",
    "Participate in SSIP hackathon with 2 stages: first stage was district level and 2nd were state level",
    "I was coordinate of 'data science challenge 2.0' that's national level organized under the IEEE",
  ];

  return (
    <Box id="education" py={20}>
      <Container maxW={"7xl"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={16}
        >
          <Heading fontSize={"3xl"}>Education & Achievements</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            My academic journey and notable achievements
          </Text>
        </Stack>

        <Stack spacing={8} maxW={"3xl"} mx={"auto"}>
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </Stack>

        <Divider my={16} />

        <Stack spacing={4} maxW={"3xl"} mx={"auto"}>
          <Heading size="lg" textAlign="center" mb={8}>
            Achievements
          </Heading>
          <VStack spacing={4} align="start">
            {achievements.map((achievement, index) => (
              <HStack key={index} spacing={4} align="start">
                <Circle size="8px" bg="brand.500" mt={2} />
                <Text color="gray.600">{achievement}</Text>
              </HStack>
            ))}
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
