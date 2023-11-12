import "./IconLink.scss";
import { motion } from "framer-motion";

interface IconLinkProps {
  linkImage: string;
  url: string;
}

const IconLink = ({ linkImage, url }: IconLinkProps) => {
  return (
    <motion.a href={url} whileHover={{ scale: 1.1 }}>
      <img src={linkImage} alt={linkImage} />
    </motion.a>
  );
};

export default IconLink;
