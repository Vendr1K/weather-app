import React from 'react'

export function ArrowRight({ className, style, width, height }) {
  return (
    <svg
      className={className ?? ''}
      style={style}
      width={width ?? '11'}
      height={height ?? '15'}
      viewBox="0 0 11 15"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d="M2.09312 -3.05176e-05L0 1.76247L6.79892 7.49997L0 13.2375L2.09312 15L11 7.49997L2.09312 -3.05176e-05Z" fill="#ACACAC" />
    </svg>
  )
}
