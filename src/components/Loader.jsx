import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ progress }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-rep-dark z-[9999] flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated background - scaled for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-rep-red/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-rep-red/15 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Logo - Mobile-first scaling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-16 text-center flex flex-col items-center px-4"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rep-red rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L7 5.57 15.57 14.14 12 17.71 13.43 19.14l1.43-1.43L16.29 19l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 14.86z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight font-display text-white">
              REP <span className="text-rep-red">ONE</span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase font-medium">Fitness Club</p>
        </motion.div>

        {/* Progress ring - Scaled for mobile */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="url(#redGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${progress * 3.52} 352`}
              initial={{ strokeDasharray: '0 352' }}
            />
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-white tabular-nums font-display">{progress}%</span>
          </div>
        </div>

        {/* Loading text - Positioned with breathing room */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-12 sm:bottom-14 md:bottom-16 text-center px-4"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/40 uppercase font-medium">
            Loading Your Training Experience
          </p>
          <div className="mt-3 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-rep-red rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
