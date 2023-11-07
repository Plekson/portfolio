import { motion } from "framer-motion";
import "./Projects.scss";
import { opacityEffect, fadeInX200Variants } from "../../variants";
import HorizontalScrollCarousel from "./CardsGallery/CardsGallery";

const Example = () => {
  return (
    <div className="projects" id="projects">
      <div className="title-container">
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
      <HorizontalScrollCarousel />
    </div>
  );
};

export default Example;
