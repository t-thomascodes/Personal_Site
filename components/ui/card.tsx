import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  rise?: boolean
}

export default function Card({ children, className = '', rise = false }: CardProps) {
  return (
    <div className={`
      bg-black/[0.97] backdrop-blur-xl border border-white/10
      shadow-[0_4px_40px_rgba(0,0,0,0.5)]
      ${rise ? 'rise' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
