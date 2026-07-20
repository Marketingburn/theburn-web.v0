'use client'

export function BurnLine() {
  return (
    <div className="w-full h-12 flex items-center justify-center py-4">
      <svg
        viewBox="0 0 1200 60"
        className="w-full h-auto"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="burnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4500" />
            <stop offset="50%" stopColor="#D6862C" />
            <stop offset="100%" stopColor="#0A0A0A" />
          </linearGradient>
        </defs>
        <path
          d="M 0,30 Q 150,10 300,25 T 600,20 T 900,25 T 1200,20"
          stroke="url(#burnGradient)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50,32 Q 200,45 350,35 T 700,40 T 1050,32"
          stroke="url(#burnGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
