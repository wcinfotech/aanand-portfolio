import { Box, Container, Text, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} Aanand Palan. All rights reserved
        </Text>
      
      </Container>
    </Box>
  );
}
