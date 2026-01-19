import React from 'react'

interface BilibiliIconProps {
  size?: number
  className?: string
}

export default function BilibiliIcon({ size = 24, className = '' }: BilibiliIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.223 3.431c1.021 0 1.853.822 1.853 1.853v13.433c0 1.03-.832 1.853-1.853 1.853H5.776c-1.021 0-1.853-.823-1.853-1.853V5.284c0-1.03.832-1.853 1.853-1.853h12.447zm-6.223 3.43L8.5 10.5v3l3.5 1.5 3.5-1.5v-3l-3.5-1.5z"/>
      <path d="M9 8.5l3 1.5 3-1.5v5l-3 1.5-3-1.5v-5z" fill="white"/>
    </svg>
  )
}

