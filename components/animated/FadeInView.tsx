import { motion } from "framer";
import { ReactChild, ReactChildren, ReactNode } from "react";

const defaultDuration = 0.5;

type FadeInViewProps = {
  duration?: number;
  children: ReactNode;
};

export const FadeInView = ({ duration, children }: FadeInViewProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: duration ?? defaultDuration }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

type FadeInYProps = {
  duration?: number;
  children: ReactNode;
};
export const FadeInY = ({ duration, children }: FadeInYProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: duration ?? defaultDuration }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 100 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
