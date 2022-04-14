import { motion, MotionValue } from "framer-motion";
import { Fragment } from "react";

type AtomsProps = {
  scrollYProgress: MotionValue<number>;
};
const Atoms = ({ scrollYProgress }: AtomsProps) => {
  return (
    <Fragment>
      <motion.div></motion.div>
    </Fragment>
  );
};

export default Atoms;
