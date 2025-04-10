import { motion, Variants } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  down: {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  left: {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[direction]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing function for smoother animation
      }}
    >
      <Box>{children}</Box>
    </motion.div>
  );
}
