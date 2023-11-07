import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { fadeInYVariants } from "../../../variants";
import Card from "../Card/Card";
import { websites } from "../../../websites";
import "./CardsGallery.scss";

const CardsGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="scroll-section">
      <div className="sticky-container">
        <motion.div style={{ x }} className="flex-container">
          {websites.map((website, index) => (
            <motion.div
              variants={fadeInYVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={website.id}
            >
              <Card card={website} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CardsGallery;
