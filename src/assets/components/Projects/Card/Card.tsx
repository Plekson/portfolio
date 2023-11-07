import { motion } from "framer-motion";
import "./Card.scss";
import { scaleUp } from "../../../variants";
import Btn from "../../Btn/Btn";

type CardType = {
  github: string;
  live: string;
  image: string;
  title: string;
  id: number;
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      variants={scaleUp}
      whileHover="animate"
      initial="initial"
      className="card-container"
    >
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card-background"
      ></div>
      <div className="card-content">
        <p className="card-title">{card.title}</p>
        <div className="card-buttons">
          <Btn text="Source code" redirect={card.github} />
          <Btn text="Live preview" redirect={card.live} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
