import "./Hero.scss";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";
import { fadeInNX200Variants } from "../../data/variants";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial="initial"
      animate="animate"
      variants={fadeInNX200Variants}
    >
      <motion.h2 variants={fadeInNX200Variants}>Piotr Lubecki</motion.h2>
      <motion.h1 variants={fadeInNX200Variants}>Web Developer</motion.h1>
      <motion.div variants={fadeInNX200Variants} className="hero__buttons">
        <Btn text="Contact me!" redirect="#contact" />
        <Btn text="See projects" redirect="#projects" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
