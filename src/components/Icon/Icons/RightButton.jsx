import React from 'react'

export function RightButton({className, style, width, height }) {
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
            <circle cx="19" cy="19" r="19" fill="white"/>
            <path d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5" stroke="#ACACAC" strokeWidth="3"/>
        </svg>
    )
}
