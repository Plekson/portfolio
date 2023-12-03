"use client";
import { motion } from "framer-motion";
import "./Card.scss";
import { scaleUp } from "../../../data/variants";
import Btn from "../../Btn/Btn";
import React from "react";

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
      className="card"
    >
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card__background"
      ></div>
      <div className="card__content">
        <p className="card__title">{card.title}</p>
        <div className="card__buttons">
          <Btn text="Source code" redirect={card.github} />
          <Btn text="Live preview" redirect={card.live} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
