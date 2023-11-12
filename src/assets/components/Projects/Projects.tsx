import { motion } from "framer-motion";
import "./Projects.scss";
import { opacityEffect, fadeInX200Variants } from "../../data/variants";
import HorizontalScrollGallery from "./HorizontalScrollGallery/HorizontalScrollGallery";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__title">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          Projects
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInX200Variants}
            className="underline"
          ></motion.div>
        </motion.h3>
      </div>
      <HorizontalScrollGallery />
    </div>
  );
};

export default Projects;
