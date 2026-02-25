export default function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-[1001]">
      <div 
        className="h-full bg-gradient-to-r from-rep-red to-rep-dark-red transition-[width] duration-100 ease-linear shadow-[0_0_20px_rgba(220,38,38,0.5)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
