import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

interface LogoProps {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

const FloatingLogo = ({ size, top, left, duration, delay }: LogoProps) => (
  <motion.div
    style={{
      position: "absolute",
      top,
      left,
      opacity: 0.1,
      zIndex: 0,
    }}
    animate={{
      y: [0, -20, 0],
      rotate: 360,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <FaReact size={size} />
  </motion.div>
);

export default function AnimatedBackground() {
  const logos = [
    { size: 40, top: "10%", left: "10%", duration: 8, delay: 0 },
    { size: 60, top: "20%", left: "80%", duration: 10, delay: 1 },
    { size: 30, top: "60%", left: "15%", duration: 7, delay: 2 },
    { size: 50, top: "75%", left: "75%", duration: 9, delay: 3 },
    { size: 45, top: "45%", left: "90%", duration: 8, delay: 4 },
    { size: 35, top: "80%", left: "35%", duration: 7, delay: 5 },
  ];

  return (
    <Box position="absolute" w="100%" h="100%" overflow="hidden" zIndex={0}>
      {logos.map((logo, index) => (
        <FloatingLogo key={index} {...logo} />
      ))}
    </Box>
  );
}
