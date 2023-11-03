import React from 'react'
import "./IconLink.scss"
import { motion } from 'framer-motion';

interface IconLinkProps{
    linkImage: string;
}

const IconLink = ({ linkImage }: IconLinkProps ) => {
  return (
    <motion.a href='' whileHover={{scale: 1.1}}><img src={linkImage} alt={linkImage}/></motion.a>
  )
}

export default IconLink