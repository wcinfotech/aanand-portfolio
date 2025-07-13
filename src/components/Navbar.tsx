import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Links = ["About", "Experience", "Skills", "Projects", "Education", "Certifications", "Contact"];

const NavLink = ({ children }: { children: string }) => (
  <Link
    to={children.toLowerCase()}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.100",
      }}
      cursor="pointer"
    >
      {children}
    </Text>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="white"
      px={4}
      position="fixed"
      width="100%"
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight="bold" color="brand.500">
          Aanand Palan
        </Text>

        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
