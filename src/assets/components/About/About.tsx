import { motion } from "framer-motion";
import "./About.scss";
import {
  fadeInX200Variants,
  fadeInNX500Variants,
  fadeInYVariants,
  opacityEffect,
} from "../../variants.ts";

const data = [
  { id: 0, name: "React", icon: "react.svg" },
  { id: 1, name: "Bootstrap", icon: "bootstrap.svg" },
  { id: 2, name: "Tailwind", icon: "tailwind.svg" },
  { id: 3, name: "Next.js", icon: "next-js.svg" },
  { id: 4, name: "Node.js", icon: "node-js.svg" },
  { id: 5, name: "Sass", icon: "sass.svg" },
  { id: 6, name: "JavaScript", icon: "javascript.svg" },
  { id: 7, name: "TypeScript", icon: "typescript.svg" },
];

const Skills = () => {
  return (
    <div className="about">
      <div className="title">
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

      <div className="description">
        <motion.div
          className="desc-text"
          initial="initial"
          whileInView="animate"
          variants={fadeInNX500Variants}
        >
          <motion.h4 variants={fadeInNX500Variants}>
            Hello, I am <span>Piotr!</span>
          </motion.h4>
          <motion.p variants={fadeInNX500Variants}>
            A passionate and dedicated Junior Front-End Developer. I specialize
            in creating responsive and aesthetically pleasing websites that
            seamlessly blend design and functionality. I take pride in
            maintaining high-quality code and staying up-to-date with the latest
            web development standards.
          </motion.p>
        </motion.div>

        <div className="desc-image">
          <motion.img
            src="laptop.png"
            alt="laptop"
            initial="initial"
            whileInView="animate"
            variants={opacityEffect}
          />
        </div>
      </div>

      <div className="technologies">
        <motion.h4
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          Tech stack I use
        </motion.h4>
        <div className="techstack">
          {data.map((skill, index) => (
            <motion.div
              className="tech"
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
