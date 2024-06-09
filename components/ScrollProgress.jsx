import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div className="scroll-progress-bar" style={{
        scaleX: scrollYProgress,
        backgroundColor: '#82B1FF',
        position: 'fixed',
        width: '100%',
        height: '5px',
        zIndex: 10000,
        transformOrigin: 'left'
    }} />  
  )
}