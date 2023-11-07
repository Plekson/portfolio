import { motion } from "framer-motion";
import { opacityEffect, fadeInX200Variants } from "../../variants";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="title-container">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          Contact
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInX200Variants}
            className="underline"
          ></motion.div>
        </motion.h3>
      </div>
    </div>
  );
};

export default Contact;
