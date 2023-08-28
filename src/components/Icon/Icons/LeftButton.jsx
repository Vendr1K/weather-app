import React from 'react'

export function LeftButton({className, style, width, height }) {
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
            <circle cx="19" cy="19" r="19" transform="rotate(-180 19 19)" fill="white"/>
            <path d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5" stroke="#ACACAC" strokeWidth="3"/>
        </svg>
    )
}
