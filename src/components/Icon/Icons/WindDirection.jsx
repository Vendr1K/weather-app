import React from 'react'

export function WindDiretion({ className, style, width, height }) {
  return (
    <svg
      className={className ?? ''}
      style={style}
      width={width ?? '38'}
      height={height ?? '38'}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle cx="19" cy="19" r="19" fill="#48484A" />
      <path d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z" fill="#E6E6E6" />
    </svg>
  )
}
