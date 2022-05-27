import AppWrap from '../../AppWrap'
import './CustomBase.scss'
import { motion } from 'framer-motion';
import baseImages from '../../../constants/baseImages';

const CustomBase = () => {
    return (
        <div className='customize'>
            <div className='image-container'>
                <div className='inner-image-container'>
                    { baseImages.map((base) => {
                        return (
                            <div>
                                <motion.div transition={{ duration: 1 }} className="base">
                                    <img src={base.src} alt="Pizza Base" height="100%" width="100%" />
                                </motion.div> 
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default AppWrap(CustomBase, 'base');