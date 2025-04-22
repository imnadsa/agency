interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 120, height: 42 },
    md: { width: 170, height: 60 },
    lg: { width: 225, height: 84 },
  }

  const { width, height } = dimensions[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-md mr-2 text-lg font-bold">
        eQ
      </div>
      <span className="text-white font-bold text-xl">eQuality</span>
    </div>
  )
}
