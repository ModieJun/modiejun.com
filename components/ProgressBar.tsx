import { Progress } from "@chakra-ui/react";
import { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  scrollYProgress: MotionValue<number>;
};

const ProgressBar = ({ scrollYProgress }: ProgressBarProps) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setValue(value * 100);
    });
    return () => {};
  }, [value]);
  return <Progress value={value} size="xs" colorScheme={"facebook"} />;
};

export default ProgressBar;
