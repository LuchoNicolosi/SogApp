import { motion } from 'framer-motion';
import PAGE_TRANSITION from '../utils/pageTransitions';
export function MotionLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: PAGE_TRANSITION.duration,
        delay: PAGE_TRANSITION.duration,
        ease: PAGE_TRANSITION.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
