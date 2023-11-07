import "./Btn.scss";
import { motion } from "framer-motion";

interface BtnProps {
  text: string;
  redirect: string;
}

const Btn = ({ text, redirect }: BtnProps) => {
  return (
    <motion.a
      href={redirect}
      className="contact-btn"
      whileHover={{ backgroundColor: "#BFA181", color: "#000" }}
    >
      {text}
    </motion.a>
  );
};

export default Btn;
