import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box position="relative" minH="100vh">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
