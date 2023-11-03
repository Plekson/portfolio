import React from "react";
import "./Hero.scss";
import Btn from "../Btn/Btn";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="textContainer"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        <motion.h2 variants={textVariants}>Piotr Lubecki</motion.h2>
        <motion.h1 variants={textVariants}>Web Developer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
          <Btn text="Contact me!" redirect="#" />
          <Btn text="See projects" redirect="#" />
        </motion.div>
      </motion.div>

      <motion.div
        className="heroImage"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="laptop.png" />
      </motion.div>
    </div>
  );
};

export default Hero;
