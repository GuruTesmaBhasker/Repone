import { motion } from 'framer-motion'

export default function ScrollIndicator({ visible }) {
  return (
    <motion.div
      className="fixed bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-3 sm:gap-4"
      animate={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-rep-gray/60">
        Begin Your Journey
      </span>
      <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-rep-red to-transparent relative overflow-hidden rounded-full">
        <div className="scroll-line" />
      </div>
    </motion.div>
  )
}
