import { motion } from "framer-motion";
import "./About.scss";
import { fadeInXVariants, fadeInYVariants } from "../../variants.ts";

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
        <h3>About me</h3>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInXVariants}
          viewport={{ once: true }}
          className="underline"
        ></motion.div>
      </div>

      <div className="description">
        <div className="desc-text">
          <h4>
            Hello, I am <span>Piotr!</span>
          </h4>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={fadeInXVariants}
            viewport={{ once: true }}
          >
            A passionate and dedicated Junior Front-End Developer. I specialize
            in creating responsive and aesthetically pleasing websites that
            seamlessly blend design and functionality. I take pride in
            maintaining high-quality code and staying up-to-date with the latest
            web development standards.
          </motion.p>
        </div>

        <div className="desc-image">
          <img src="laptop.png" alt="laptop" />
        </div>
      </div>

      <div className="technologies">
        <h4>Tech stack I use</h4>
        <div className="techstack">
          {data.map((skill, index) => (
            <motion.div
              className="tech"
              key={skill.name}
              variants={fadeInYVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
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
