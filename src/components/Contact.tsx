import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
}

const ContactItem = ({ icon, title, content, href }: ContactItemProps) => {
  const content_element = href ? (
    <Link href={href} isExternal color="brand.500">
      {content}
    </Link>
  ) : (
    <Text color="gray.600">{content}</Text>
  );

  return (
    <HStack spacing={4}>
      <Icon as={icon} w={6} h={6} color="brand.500" />
      <Stack spacing={0}>
        <Text fontWeight="bold">{title}</Text>
        {content_element}
      </Stack>
    </HStack>
  );
};

export default function Contact() {
  return (
    <Box id="contact" py={20} bg="gray.50">
      <Container maxW={"3xl"}>
        <Stack spacing={4} as={Container} textAlign={"center"} mb={16}>
          <Heading fontSize={"3xl"}>Contact Me</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Feel free to reach out to me through any of these channels
          </Text>
        </Stack>

        <Stack spacing={8}>
          <ContactItem
            icon={FaPhone}
            title="Phone"
            content="+91 84603 95732"
            href="tel:+918460395732"
          />
          <ContactItem
            icon={FaEnvelope}
            title="Email"
            content="aanand.palan8@gmail.com"
            href="mailto:aanand.palan8@gmail.com"
          />
          <ContactItem
            icon={FaMapMarkerAlt}
            title="Location"
            content="Surat, Gujarat, India"
          />
          <ContactItem
            icon={FaLinkedin}
            title="LinkedIn"
            content="https://www.linkedin.com/in/aanand-palan-8804471b1/"
            href="https://www.linkedin.com/in/aanand-palan-8804471b1/"
          />
          <ContactItem
            icon={FaGithub}
            title="GitHub"
            content="https://github.com/wcinfotech"
            href="https://github.com/wcinfotech"
          />
          <ContactItem
            icon={FaGlobe}
            title="Portfolio"
            content="https://wcinfotech.github.io/aanand-portfolio/"
            href="https://wcinfotech.github.io/aanand-portfolio/"
          />
        </Stack>
      </Container>
    </Box>
  );
}
