import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import "./Carousel.scss";

const Carousel = () => {
  return (
    <motion.div animate={{ x:50 }} >
        Hello there
    </motion.div>
  )
}

export default Carousel