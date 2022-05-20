import Square from "./Square/Square";
import Circle from "./Circle/Circle";
import { motion } from "framer-motion";

import './CakeDesign.scss';
import Heart from "./Heart/Heart";


const CakeDesign = () => {
    return (
        <>
            <motion.div 
                animate={{ x:150, y:50 }}
                transition={{ duration:3 }}
                whileInView={{ opacity:[0,1] }}
            >
                <Heart />
            </motion.div>
            <motion.div 
                animate={{ x:450, y:50 }}
                transition={{ duration:3 }}
                whileInView={{ opacity:[0,1] }}
            >
                <Circle />
            </motion.div>
            <motion.div 
                animate={{ x:750, y:50 }}
                transition={{ duration:3 }}
                whileInView={{ opacity:[0,1] }}
            >
                <Square />
            </motion.div>
            <motion.h1 
                animate={{ x:100 }}
                transition={{ duration:3 }}
                whileInView={{ opacity:[0,1] }}
            >
                Hello Dery
            </motion.h1>
        </>
    )
}

export default CakeDesign