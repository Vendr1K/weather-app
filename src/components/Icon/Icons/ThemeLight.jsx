import React from "react"

export function ThemeLight({className, style, width, height }) {
    return (
        <svg 
            className={className ?? ''}
            style={style}
            width={width ?? '64'}
            height={height ?? '32'} 
            viewBox="0 0 64 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
                <path fillRule="evenodd" clipRule="evenodd" d="M38 16C38 10.4772 42.4772 6 48 6C53.5228 6 58 10.4772 58 16C58 21.5228 53.5228 26 48 26C42.4772 26 38 21.5228 38 16Z" fill="#EC6E4D"/>
                <path d="M51.6067 11.1213C50.8345 10.3492 49.8969 9.8358 48.9126 9.57276C49.4472 11.5753 48.9338 13.7942 47.364 15.364C45.7943 16.9337 43.5754 17.4471 41.5728 16.9125C41.8359 17.8968 42.3492 18.8344 43.1214 19.6066C45.4633 21.9485 49.2647 21.9485 51.6067 19.6066C53.9486 17.2647 53.9486 13.4633 51.6067 11.1213Z" fill="#212331"/>
        </svg>
    )
  }
