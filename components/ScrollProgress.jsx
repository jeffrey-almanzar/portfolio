import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{
        scaleX: scrollYProgress,
        backgroundColor: '#82B1FF',
        position: 'fixed',
        width: '100%',
        height: '5px',
        top: '56px',
        zIndex: 10000,
        transformOrigin: 'left'
    }} />  
  )
}