import "./Hero.scss";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";
import { fadeInX500Variants } from "../../variants";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial="initial"
      animate="animate"
      variants={fadeInX500Variants}
    >
      <motion.h2 variants={fadeInX500Variants}>Piotr Lubecki</motion.h2>
      <motion.h1 variants={fadeInX500Variants}>Web Developer</motion.h1>
      <motion.div variants={fadeInX500Variants} className="buttons">
        <Btn text="Contact me!" redirect="#" />
        <Btn text="See projects" redirect="#projects" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
