import "./Projects.scss";
import { fadeInXVariants } from "../../variants";
import { motion } from "framer-motion";
import Btn from "../Btn/Btn";

// ZROBIC SCROLL EFFECT!!!

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <h3>Projects</h3>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInXVariants}
          viewport={{ once: true }}
          className="underline"
        ></motion.div>
      </div>

      <div className="works">
        <div className="project">
          <img className="web-bg" src="web-bg.jpg" alt="website preview" />
          <div className="buttons">
            <Btn text="Source code" redirect="#" />
            <Btn text="Live preview" redirect="#" />
          </div>
        </div>
        <div className="project">
          <img className="web-bg" src="web-bg.jpg" alt="website preview" />
          <div className="buttons">
            <Btn text="Source code" redirect="#" />
            <Btn text="Live preview" redirect="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
