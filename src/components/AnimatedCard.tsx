import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

interface AnimatedCardProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
}

const MotionBox = motion(
  forwardRef<AnimatedCardProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export default function AnimatedCard({
  children,
  delay = 0,
  ...props
}: AnimatedCardProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      // @ts-ignore - Framer Motion transition prop type issue
      transition={{ duration: 0.3 }}
      padding={6}
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      _dark={{
        bg: "gray.800",
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
