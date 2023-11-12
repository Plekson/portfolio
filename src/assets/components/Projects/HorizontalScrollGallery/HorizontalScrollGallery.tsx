import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { fadeInYVariants } from "../../../data/variants";
import Card from "../Card/Card";
import { websites } from "../../../data/websites";
import "./HorizontalScrollGallery.scss";

const HorizontalScrollGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
      <div ref={targetRef} className="horizontalScroll-gallery">
        <div className="horizontalScroll-gallery__sticky">
          <motion.div style={{ x }} className="horizontalScroll-gallery__flex">
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
      </div>
    </>
  );
};

export default HorizontalScrollGallery;
