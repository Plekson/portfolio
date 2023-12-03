"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import {
  fadeInNX200Variants,
  fadeInX200Variants,
  fadeInYVariants,
  opacityEffect,
} from "../../data/variants.ts";
import { technologies } from "../../data/technologies.ts";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about">
      <div className="about__title">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          About me
        </motion.h3>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInX200Variants}
          className="underline"
        ></motion.div>
      </div>

      <div className="about__description">
        <motion.div
          className="about__desc-text"
          initial={!isMobile ? "initial" : {}}
          whileInView={!isMobile ? "animate" : {}}
          variants={fadeInNX200Variants}
        >
          <motion.h4 variants={fadeInNX200Variants}>
            Hello, I am <span>Piotr!</span>
          </motion.h4>
          <motion.p variants={fadeInNX200Variants}>
            A passionate and dedicated Junior Front-End Developer with a focus
            on creating responsive websites that effortlessly integrate design
            and functionality. I take pride in maintaining high-quality code and
            staying updated with the latest web development standards.
          </motion.p>
        </motion.div>

        <div className="about__desc-image">
          <motion.img
            src="illustration.png"
            alt="laptop"
            initial="initial"
            whileInView="animate"
            variants={opacityEffect}
          />
        </div>
      </div>

      <div className="about__technologies">
        <motion.h4
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          Tech stack I use
        </motion.h4>
        <div className="about__techstack">
          {technologies.map((skill, index) => (
            <motion.div
              className="about__tech"
              key={skill.name}
              variants={fadeInYVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <img src={skill.icon} alt={skill.name} />
              <h5>{skill.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
